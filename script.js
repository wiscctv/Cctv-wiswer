
fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="\${product.image}" alt="\${product.name}"/>
        <h3>\${product.name}</h3>
        <p>\${product.description}</p>
        <div class="price">Rp \${product.price.toLocaleString()}</div>
        <a href="https://wa.me/6281234567890?text=Halo%20WIS%20CCTV%2C%20saya%20tertarik%20dengan%20produk%3A%20\${encodeURIComponent(product.name)}%20(Rp%20\${product.price.toLocaleString()})">Pesan Sekarang</a>
      `;
      list.appendChild(card);
    });
  });
