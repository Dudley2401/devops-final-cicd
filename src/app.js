const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevOps CI/CD Final Project</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Segoe UI", Arial, sans-serif;
      background: #020617;
      color: #ffffff;
      overflow-x: hidden;
    }

    .background {
      position: fixed;
      inset: 0;
      background:
        radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.35), transparent 30%),
        radial-gradient(circle at 80% 30%, rgba(34, 197, 94, 0.25), transparent 30%),
        radial-gradient(circle at 50% 90%, rgba(168, 85, 247, 0.3), transparent 35%),
        #020617;
      z-index: -2;
    }

    .grid-bg {
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: linear-gradient(to bottom, black, transparent);
      z-index: -1;
    }

    header {
      width: 100%;
      padding: 24px 8%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 10;
    }

    .logo {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: 1px;
    }

    .logo span {
      color: #22c55e;
    }

    nav {
      display: flex;
      gap: 24px;
      color: #cbd5e1;
      font-size: 15px;
    }

    .hero {
      min-height: 85vh;
      padding: 60px 8%;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 50px;
      align-items: center;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(34, 197, 94, 0.14);
      color: #86efac;
      border: 1px solid rgba(34, 197, 94, 0.35);
      padding: 10px 18px;
      border-radius: 999px;
      font-weight: 700;
      margin-bottom: 24px;
      animation: fadeUp 0.8s ease forwards;
    }

    h1 {
      font-size: clamp(44px, 6vw, 78px);
      line-height: 1;
      margin-bottom: 24px;
      animation: fadeUp 1s ease forwards;
    }

    h1 span {
      background: linear-gradient(90deg, #38bdf8, #22c55e);
      -webkit-background-clip: text;
      color: transparent;
    }

    .description {
      max-width: 680px;
      color: #cbd5e1;
      font-size: 19px;
      line-height: 1.7;
      margin-bottom: 34px;
      animation: fadeUp 1.2s ease forwards;
    }

    .buttons {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      animation: fadeUp 1.4s ease forwards;
    }

    .btn {
      text-decoration: none;
      padding: 15px 24px;
      border-radius: 14px;
      font-weight: 800;
      transition: 0.3s ease;
    }

    .btn-primary {
      background: #22c55e;
      color: #052e16;
      box-shadow: 0 15px 35px rgba(34, 197, 94, 0.35);
    }

    .btn-primary:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 45px rgba(34, 197, 94, 0.5);
    }

    .btn-secondary {
      color: white;
      border: 1px solid rgba(255,255,255,0.2);
      background: rgba(255,255,255,0.08);
    }

    .visual {
      position: relative;
      height: 520px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .orbit {
      position: absolute;
      width: 390px;
      height: 390px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 50%;
      animation: rotate 18s linear infinite;
    }

    .orbit.two {
      width: 290px;
      height: 290px;
      animation-duration: 12s;
      animation-direction: reverse;
    }

    .orb {
      position: absolute;
      width: 72px;
      height: 72px;
      border-radius: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      box-shadow: 0 20px 50px rgba(0,0,0,0.35);
    }

    .orb.node { top: -35px; left: 155px; background: #22c55e; color: #052e16; }
    .orb.docker { right: -35px; top: 150px; background: #38bdf8; color: #082f49; }
    .orb.github { bottom: -35px; left: 155px; background: #e5e7eb; color: #111827; }
    .orb.render { left: -35px; top: 150px; background: #a78bfa; color: #2e1065; }

    .center-card {
      width: 270px;
      min-height: 270px;
      border-radius: 32px;
      background: rgba(15, 23, 42, 0.88);
      border: 1px solid rgba(255,255,255,0.18);
      backdrop-filter: blur(20px);
      padding: 32px;
      text-align: center;
      box-shadow: 0 30px 80px rgba(0,0,0,0.45);
      animation: float 4s ease-in-out infinite;
      z-index: 5;
    }

    .center-card img {
      width: 95px;
      margin-bottom: 20px;
    }

    .center-card h2 {
      font-size: 26px;
      margin-bottom: 12px;
    }

    .center-card p {
      color: #94a3b8;
      line-height: 1.6;
    }

    .section {
      padding: 70px 8%;
    }

    .section-title {
      text-align: center;
      font-size: 38px;
      margin-bottom: 14px;
    }

    .section-subtitle {
      text-align: center;
      color: #94a3b8;
      max-width: 700px;
      margin: 0 auto 45px;
      line-height: 1.7;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
    }

    .card {
      background: rgba(15, 23, 42, 0.78);
      border: 1px solid rgba(255,255,255,0.12);
      padding: 28px;
      border-radius: 24px;
      transition: 0.3s ease;
    }

    .card:hover {
      transform: translateY(-8px);
      border-color: rgba(34, 197, 94, 0.5);
      box-shadow: 0 20px 50px rgba(0,0,0,0.35);
    }

    .icon {
      font-size: 34px;
      margin-bottom: 18px;
    }

    .card h3 {
      font-size: 22px;
      margin-bottom: 12px;
    }

    .card p {
      color: #94a3b8;
      line-height: 1.6;
    }

    footer {
      padding: 28px 8%;
      text-align: center;
      color: #64748b;
      border-top: 1px solid rgba(255,255,255,0.08);
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-18px); }
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(28px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 900px) {
      nav {
        display: none;
      }

      .hero {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .description {
        margin-left: auto;
        margin-right: auto;
      }

      .buttons {
        justify-content: center;
      }

      .visual {
        height: 420px;
      }

      .orbit {
        width: 310px;
        height: 310px;
      }

      .orbit.two {
        width: 230px;
        height: 230px;
      }
    }
  </style>
</head>

<body>
  <div class="background"></div>
  <div class="grid-bg"></div>

  <header>
    <div class="logo">DevOps<span>Final</span></div>
    <nav>
      <span>CI/CD</span>
      <span>Testing</span>
      <span>Docker</span>
      <span>Deploy</span>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div>
        <div class="badge">● Pipeline automatizado activo</div>

        <h1>
          Proyecto Final <br />
          <span>DevOps CI/CD</span>
        </h1>

        <p class="description">
          Aplicación web profesional desarrollada con Node.js y Express,
          integrada con pruebas unitarias, contenedores Docker, automatización
          con GitHub Actions, publicación en Docker Hub y despliegue continuo
          en producción.
        </p>

        <div class="buttons">
          <a class="btn btn-primary" href="/health">Ver estado de la app</a>
          <a class="btn btn-secondary" href="#stack">Ver tecnologías</a>
        </div>
      </div>

      <div class="visual">
        <div class="orbit">
          <div class="orb node">Node</div>
          <div class="orb docker">Docker</div>
          <div class="orb github">GitHub</div>
          <div class="orb render">Render</div>
        </div>

        <div class="orbit two"></div>

        <div class="center-card">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Node.js Logo" />
          <h2>Hello DevOps</h2>
          <p>
            Build, test, containerize and deploy using a professional CI/CD workflow.
          </p>
        </div>
      </div>
    </section>

    <section class="section" id="stack">
      <h2 class="section-title">Flujo profesional del proyecto</h2>
      <p class="section-subtitle">
        Este proyecto representa un ciclo completo de entrega continua,
        desde el desarrollo hasta la publicación automática en producción.
      </p>

      <div class="cards">
        <div class="card">
          <div class="icon">🧪</div>
          <h3>Pruebas Unitarias</h3>
          <p>Validación automática de rutas principales usando Jest y Supertest.</p>
        </div>

        <div class="card">
          <div class="icon">🐳</div>
          <h3>Dockerización</h3>
          <p>Aplicación empaquetada en una imagen Docker lista para producción.</p>
        </div>

        <div class="card">
          <div class="icon">⚙️</div>
          <h3>GitHub Actions</h3>
          <p>Pipeline automatizado que instala dependencias, prueba y construye.</p>
        </div>

        <div class="card">
          <div class="icon">🚀</div>
          <h3>Deploy Continuo</h3>
          <p>Publicación automática de la aplicación en un entorno productivo.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    Proyecto Final DevOps CI/CD | Dudley Peter | Node.js · Docker · GitHub Actions · Render
  </footer>
</body>
</html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Application is running successfully",
    project: "DevOps CI/CD Final Project",
    environment: process.env.NODE_ENV || "development",
    uptime: process.uptime()
  });
});

module.exports = app;