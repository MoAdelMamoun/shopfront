"""Capture screenshots of the built static site via Playwright.

Build first, then serve the static `out/` directory and run this script:
    npm run build
    python -m http.server 8401 --directory out &
    python tools/shoot.py http://localhost:8401
"""
import sys
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

OUT = Path(__file__).resolve().parent.parent / "docs" / "screenshots"
PRODUCT_SLUGS = ["linen-throw-blanket", "stoneware-vase", "enamel-camp-mug"]


def main(base: str) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    base = base.rstrip("/")
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="chrome", headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900},
                                device_scale_factor=2)

        # Home — viewport hero + full page.
        page.goto(base + "/", wait_until="networkidle")
        time.sleep(1.0)
        page.screenshot(path=str(OUT / "home.png"))
        page.screenshot(path=str(OUT / "home-full.png"), full_page=True)
        print("saved home.png, home-full.png")

        # Catalog.
        page.goto(base + "/catalog", wait_until="networkidle")
        time.sleep(1.0)
        page.screenshot(path=str(OUT / "catalog.png"), full_page=True)
        print("saved catalog.png")

        # Product detail — first slug that resolves.
        slug = PRODUCT_SLUGS[0]
        for s in PRODUCT_SLUGS:
            r = page.goto(f"{base}/product/{s}", wait_until="networkidle")
            if r and r.status == 200:
                slug = s
                break
        time.sleep(0.8)
        page.screenshot(path=str(OUT / "product.png"), full_page=True)
        print(f"saved product.png ({slug})")

        # Add two items to the cart, then capture the cart.
        for s in PRODUCT_SLUGS[:2]:
            page.goto(f"{base}/product/{s}", wait_until="networkidle")
            time.sleep(0.4)
            try:
                page.get_by_role("button", name="Add to cart").first.click(timeout=3000)
            except Exception:  # noqa: BLE001 - service item or layout variance
                try:
                    page.get_by_role("button", name="Add booking to cart").first.click(timeout=2000)
                except Exception:  # noqa: BLE001
                    pass
            time.sleep(0.4)
        page.goto(base + "/cart", wait_until="networkidle")
        time.sleep(0.8)
        page.screenshot(path=str(OUT / "cart.png"), full_page=True)
        print("saved cart.png")

        # Checkout (cart still has items).
        page.goto(base + "/checkout", wait_until="networkidle")
        time.sleep(0.8)
        page.screenshot(path=str(OUT / "checkout.png"), full_page=True)
        print("saved checkout.png")

        # Contact.
        page.goto(base + "/contact", wait_until="networkidle")
        time.sleep(0.8)
        page.screenshot(path=str(OUT / "contact.png"), full_page=True)
        print("saved contact.png")

        browser.close()


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8401")
