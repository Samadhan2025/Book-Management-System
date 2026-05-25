// Import defineConfig helper from Vite
import { defineConfig } from "vite";

// Import React plugin for Vite
import react from "@vitejs/plugin-react";

// Import Tailwind plugin
import tailwindcss from "@tailwindcss/vite";

// Export Vite configuration
export default defineConfig({

  // Plugins section
  plugins: [

    // Enable React support
    react(),

    // Enable Tailwind CSS support
    tailwindcss(),
  ],
});