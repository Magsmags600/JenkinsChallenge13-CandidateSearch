// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   envDir: './env',
//   plugins: [react()],
// });
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000, // This sets the port for localhost
  },
});
