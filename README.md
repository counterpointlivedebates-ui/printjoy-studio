# PrintJoy Studio Storefront

Beautiful, functional printable templates delivered instantly as digital downloads.

## Tech Stack

- **Framework:** Vite + React
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **Payments & Delivery:** Lemon Squeezy integration

## Project Structure

- `src/components/`: Reusable UI components (Navbar, Footer, ProductCard)
- `src/pages/`: Main application pages (Home, ProductDetail)
- `src/lib/`: Shared utilities and product data
- `src/assets/`: Static assets including product preview images

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Configuration

Copy `.env.example` to `.env` and fill in the Lemon Squeezy checkout URLs for each product.
