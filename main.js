 const products = [
            {
                name: "MacBook Pro",
                price: "Desde 2.499€",
                seller: "Apple",
                image: "https://s1.elespanol.com/2023/01/23/omicrono/analisis-prueba-productos/735936812_230344949_1706x960.jpg"
            },
            {
                name: "iPhone 16 Pro",
                price: "Desde 959€", 
                seller: "Apple",
                image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.landing-big_2x.jpg"
            },
            {
                name: "iPad Air",
                price: "Desde 699€",
                seller: "Apple", 
                image: "https://laptop360.net/wp-content/uploads/2023/04/Apple-iPad-Air-5-M1-1.jpg"
            },
            {
                name: "Apple Watch",
                price: "Desde 279€",
                seller: "Apple",
                image: "https://static.independent.co.uk/2024/09/17/12/Apple-watch.jpg"
            },
            {
                name: "AirPods Pro 2",
                price: "279€",
                seller: "Apple",
                image: "https://www.apple.com/v/airpods-pro/l/images/meta/og__eui2mpgzwyaa_overview.png"
            },
            {
                name: "iMac 24",
                price: "Desde 1.519€",
                seller: "Apple",
                image: "https://www.apple.com/newsroom/images/2023/10/apple-supercharges-24-inch-imac-with-new-m3-chip/article/Apple-iMac-M3-colors-231030_big.jpg.large.jpg"
            }
        ];

        // Función para renderizar los productos
        function renderProducts() {
            const gallery = document.getElementById('gallery');
            
            // Crear HTML para cada producto
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                
                card.innerHTML = `
                    <div class="card-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="card-content">
                        <h3>${product.name}</h3>
                        <div class="price">${product.price}</div>
                        <div class="seller">${product.seller}</div>
                    </div>
                `;
                
                gallery.appendChild(card);
            });
        }

        // Inicializar cuando se carga la página
        document.addEventListener('DOMContentLoaded', renderProducts);