const SUPABASE_URL = "https://fxoytxipzhwwwoszbcjg.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4b3l0eGlwemh3d3dvc3piY2pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwMTY1MTQsImV4cCI6MjA0MjU5MjUxNH0.km3ECRAx3hOms-0c5jq9ZWunvuVPiF1jdE5IxlWQVJY";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("statusMessage");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    statusEl.textContent = "Enviando...";

    const { error } = await supabaseClient
        .from("contactos")
        .insert([
            { nombre, correo, telefono, mensaje }
        ]);

    if (error) {
        console.error(error);
        statusEl.textContent = "❌ Ocurrió un error al enviar.";
    } else {
        statusEl.textContent = "✅ ¡Mensaje enviado correctamente!";
        form.reset();
    }
});