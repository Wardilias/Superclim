// Seleciona o ícone do menu toggle e o menu principal
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

// Adiciona um evento de clique ao ícone do menu toggle
menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});

// Função para gerenciar os submenus em dispositivos móveis
const menuItems = document.querySelectorAll('.main-menu > li');

menuItems.forEach(item => {
    const submenu = item.querySelector('.submenu');
    const link = item.querySelector('a');

    if (submenu) {
        // Adiciona um evento de clique ao link que tem submenu
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {  // Apenas em dispositivos móveis
                if (!submenu.classList.contains('submenu-active')) {
                    e.preventDefault(); // Evita a navegação padrão somente quando o submenu ainda não está ativo

                    // Fecha todos os outros submenus antes de abrir o atual
                    document.querySelectorAll('.submenu-active').forEach(activeSubmenu => {
                        if (activeSubmenu !== submenu) {
                            activeSubmenu.classList.remove('submenu-active');
                        }
                    });

                    // Alterna o submenu atual (abre/fecha)
                    submenu.classList.toggle('submenu-active');
                }
                // Se o submenu já está aberto, permite que o link redirecione para a página
            }
        });
    }
});
