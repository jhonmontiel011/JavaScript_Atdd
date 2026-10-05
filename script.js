const languages = [
  {
    id: "python",
    name: "Python (Pitón)",
    icon: "fa-brands fa-python",
    color: "text-amber-400",
    bgBadge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    category: "data",
    categoryLabel: "Data Science & IA",
    popularity: "98%",
    created: "1991 - Guido van Rossum",
    description: "Conocido por su sintaxis extremadamente limpia y legible. Es el estándar de oro en Inteligencia Artificial, Ciencia de Datos, automatización y desarrollo backend.",
    features: ["Sintaxis intuitiva e inteligible", "Extenso ecosistema en Machine Learning", "Lenguaje multiparadigma dinámico", "Gran soporte comunitario"],
    code: `def evaluar_lenguaje(nombre):
    return f"{nombre} es referente en Data Science e IA"

print(evaluar_lenguaje("Python"))`
  },
  {
    id: "c",
    name: "C",
    icon: "fa-solid fa-code",
    color: "text-slate-300",
    bgBadge: "bg-slate-500/10 text-slate-300 border-slate-500/30",
    category: "backend",
    categoryLabel: "Sistemas Operativos & Hardware",
    popularity: "86%",
    created: "1972 - Dennis Ritchie",
    description: "La base de la informática moderna. Prácticamente todos los sistemas operativos (Linux, Windows, macOS) y controladores de bajo nivel están escritos en C.",
    features: ["Acceso directo y control de memoria", "Rendimiento y eficiencia imbatibles", "Inspirador de C++, Java, C# y JS", "Portabilidad a nivel de hardware"],
    code: `#include <stdio.h>

int main() {
    printf("¡Hola Mundo desde el lenguaje C!\\n");
    return 0;
}`
  },
  {
    id: "cpp",
    name: "C++",
    icon: "fa-solid fa-c",
    color: "text-blue-400",
    bgBadge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    category: "backend",
    categoryLabel: "Videojuegos & Alto Rendimiento",
    popularity: "88%",
    created: "1985 - Bjarne Stroustrup",
    description: "Evolución de C que incorpora Programación Orientada a Objetos. Es el pilar fundamental para motores de videojuegos (Unreal Engine) y aplicaciones de tiempo real.",
    features: ["Gestión manual avanzada de memoria", "Velocidad de ejecución máxima", "Orientación a Objetos y plantillas", "Ideal para sistemas críticos"],
    code: `#include <iostream>

int main() {
    std::cout << "Rendimiento máximo con C++" << std::endl;
    return 0;
}`
  },
  {
    id: "java",
    name: "Java",
    icon: "fa-brands fa-java",
    color: "text-orange-500",
    bgBadge: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    category: "backend",
    categoryLabel: "Enterprise & Backend",
    popularity: "90%",
    created: "1995 - James Gosling",
    description: "Famoso por su principio 'Escribe una vez, ejecútalo en cualquier parte'. Es ampliamente utilizado en el ámbito empresarial, banca y desarrollo nativo Android.",
    features: ["Multiplataforma gracias a la JVM", "Orientación a Objetos estricta", "Seguridad de tipos y robustez", "Escalabilidad en grandes sistemas"],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Java corriendo sobre la JVM");
    }
}`
  },
  {
    id: "csharp",
    name: "C# (DO#)",
    icon: "fa-solid fa-cube",
    color: "text-purple-400",
    bgBadge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    category: "backend",
    categoryLabel: ".NET & Unity Videojuegos",
    popularity: "84%",
    created: "2000 - Microsoft",
    description: "Diseñado por Microsoft dentro del ecosistema .NET. Es potente, versátil y el lenguaje principal para el desarrollo de videojuegos en 2D/3D con el motor Unity.",
    features: ["Totalmente integrado con .NET", "Motor oficial de Unity Engine", "Sintaxis moderna y estructurada", "Procesamiento concurrente potente"],
    code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Desarrollo en C# con .NET y Unity");
    }
}`
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "fa-brands fa-js",
    color: "text-yellow-400",
    bgBadge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    category: "web",
    categoryLabel: "Desarrollo Web Full-Stack",
    popularity: "96%",
    created: "1995 - Brendan Eich",
    description: "El lenguaje de programación nativo de la Web. Permite agregar interactividad dinámica en el navegador y desarrollar servidores con Node.js.",
    features: ["Ejecución directa en navegadores", "Programación orientada a eventos", "Ecosistema gigante con NPM", "Desarrollo Full-Stack completo"],
    code: `const saludar = (lenguaje) => {
  console.log(\`JavaScript interactivo para \${lenguaje}\`);
};

saludar("Web Apps");`
  },
  {
    id: "vb",
    name: "Visual Basic",
    icon: "fa-solid fa-window-maximize",
    color: "text-sky-400",
    bgBadge: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    category: "backend",
    categoryLabel: "Desktop & Automatización",
    popularity: "70%",
    created: "1991 - Microsoft",
    description: "Creado para facilitar la construcción rápida de aplicaciones de escritorio con interfaz gráfica. Su variante VBA es muy usada para automatizar Microsoft Excel.",
    features: ["Sintaxis limpia y cercana al inglés", "Desarrollo rápido de interfaces (RAD)", "Automatización de Office mediante VBA", "Programación orientada a eventos"],
    code: `Module Program
    Sub Main()
        Console.WriteLine("Automatización rápida con Visual Basic")
    End Sub
End Module`
  },
  {
    id: "sql",
    name: "SQL",
    icon: "fa-solid fa-database",
    color: "text-teal-400",
    bgBadge: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    category: "data",
    categoryLabel: "Bases de Datos Relacionales",
    popularity: "92%",
    created: "1974 - IBM",
    description: "Lenguaje declarativo estándar para almacenar, manipular y consultar datos en sistemas de bases de datos relacionales como PostgreSQL, MySQL y SQL Server.",
    features: ["Sintaxis declarativa estandarizada", "Gestión masiva de registros", "Indispensable en Backend y Analytics", "Consistencia de datos (ACID)"],
    code: `SELECT nombre, puesto, salario 
FROM empleados 
WHERE salario > 50000 
ORDER BY salario DESC;`
  },
  {
    id: "r",
    name: "R",
    icon: "fa-solid fa-chart-line",
    color: "text-indigo-400",
    bgBadge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    category: "data",
    categoryLabel: "Estadística & Gráficos",
    popularity: "74%",
    created: "1993 - Ross Ihaka y Robert Gentleman",
    description: "Diseñado para el análisis estadístico, la minería de datos y la investigación científica. Destaca por su capacidad para generar gráficos estadísticos de gran calidad.",
    features: ["Enfoque 100% estadístico", "Potente visualización de datos", "Cientas de librerías en CRAN", "Muy utilizado en la academia"],
    code: `vector_datos <- c(10, 20, 30, 40, 50)
media_datos <- mean(vector_datos)

cat("La media estadística en R es:", media_datos)`
  },
  {
    id: "rust",
    name: "Rust (Óxido)",
    icon: "fa-solid fa-gear",
    color: "text-red-400",
    bgBadge: "bg-red-500/10 text-red-400 border-red-500/30",
    category: "backend",
    categoryLabel: "Sistemas & Seguridad de Memoria",
    popularity: "82%",
    created: "2010 - Graydon Hoare (Mozilla)",
    description: "Un lenguaje de programación de sistemas que garantiza la seguridad de la memoria y la concurrencia sin necesidad de un recolector de basura.",
    features: ["Sistema de 'ownership' único", "Prevención de errores de memoria en compilación", "Rendimiento similar a C y C++", "Altamente valorado por la comunidad"],
    code: `fn main() {
    println!("¡Seguridad de memoria y alto rendimiento con Rust!");
}`
  }
];

const grid = document.getElementById('languagesGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const emptyState = document.getElementById('emptyState');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');

function renderLanguages(list) {
  grid.innerHTML = '';
  
  if (list.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  
  emptyState.classList.add('hidden');

  list.forEach((lang, index) => {
    const card = document.createElement('div');
    card.className = `language-card bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:border-slate-500 shadow-lg`;
    
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <i class="${lang.icon} ${lang.color} text-3xl"></i>
            <div>
              <h3 class="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">${lang.name}</h3>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full border ${lang.bgBadge}">
                ${lang.categoryLabel}
              </span>
            </div>
          </div>
          <span class="text-xs font-bold text-slate-400">#${index + 1}</span>
        </div>
        <p class="text-slate-400 text-xs line-clamp-3 mb-4 leading-relaxed">
          ${lang.description}
        </p>
      </div>

      <div>
        <div class="mb-3">
          <div class="flex justify-between text-[11px] mb-1">
            <span class="text-slate-400">Popularidad</span>
            <span class="text-emerald-400 font-semibold">${lang.popularity}</span>
          </div>
          <div class="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div class="bg-emerald-500 h-1.5 rounded-full" style="width: ${lang.popularity}"></div>
          </div>
        </div>

        <button class="w-full py-2 bg-slate-700/50 hover:bg-blue-600/20 hover:text-blue-400 text-slate-300 text-xs font-semibold rounded-lg border border-slate-600/50 hover:border-blue-500/40 transition-all flex items-center justify-center gap-2">
          Ver Detalles <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    `;

    card.addEventListener('click', () => openModal(lang));
    grid.appendChild(card);
  });
}

function filterLanguages() {
  const query = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;

  const filtered = languages.filter(lang => {
    const matchesSearch = lang.name.toLowerCase().includes(query) || 
                          lang.description.toLowerCase().includes(query) ||
                          lang.categoryLabel.toLowerCase().includes(query);
    const matchesCategory = category === 'all' || lang.category === category;

    return matchesSearch && matchesCategory;
  });

  renderLanguages(filtered);
}

function openModal(lang) {
  document.getElementById('modalIcon').className = `${lang.icon} ${lang.color}`;
  document.getElementById('modalTitle').textContent = lang.name;
  
  const categoryBadge = document.getElementById('modalCategory');
  categoryBadge.textContent = lang.categoryLabel;
  categoryBadge.className = `text-xs px-2.5 py-0.5 rounded-full font-medium border ${lang.bgBadge}`;

  document.getElementById('modalDescription').textContent = lang.description;
  document.getElementById('modalAuthor').textContent = lang.created;
  document.getElementById('modalPopularity').textContent = `${lang.popularity} de adopción/uso general`;

  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = lang.features.map(f => `
    <li class="flex items-center gap-2 bg-slate-900/40 p-2 rounded-lg border border-slate-800">
      <i class="fa-solid fa-check text-emerald-400"></i> ${f}
    </li>
  `).join('');

  document.getElementById('modalCode').textContent = lang.code;

  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.add('is-open'), 10);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 200);
}

searchInput.addEventListener('input', filterLanguages);
categoryFilter.addEventListener('change', filterLanguages);
closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

renderLanguages(languages);