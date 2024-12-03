import { Pool } from "pg";

<<<<<<< HEAD
const connectionString =
  "postgresql://postgres:MproHSeiwOafTYtUafqfWOgvNjTTVbVu@autorack.proxy.rlwy.net:17962/railway";
=======
// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://postgres:flToTcJRqHcLURIRTJkLcmWpqxxbFQqR@autorack.proxy.rlwy.net:19394/railway";
>>>>>>> 98255963902351c7f32bb23488637188827a2905

const pool = new Pool({
  connectionString,
  ssl: {
<<<<<<< HEAD
    rejectUnauthorized: false,
=======
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
>>>>>>> 98255963902351c7f32bb23488637188827a2905
  },
});

export default pool;
