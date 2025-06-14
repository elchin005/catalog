const searchBar = document.getElementById('searchBar');
const filterBrand = document.getElementById('filterBrand');
const filterMaterial = document.getElementById('filterMaterial');
const filterColor = document.getElementById('filterColor');
const rows = document.querySelectorAll('#productTable tbody tr');

function applyFilters() {
  const brand = filterBrand.value.toLowerCase();
  const material = filterMaterial.value.toLowerCase();
  const color = filterColor.value.toLowerCase();
  const search = searchBar.value.toLowerCase();

  rows.forEach(row => {
    const rowText = row.innerText.toLowerCase();
    const rowBrand = row.children[1].innerText.toLowerCase();
    const rowMaterial = row.children[3].innerText.toLowerCase();
    const rowColor = row.children[4].innerText.toLowerCase();

    const matchesBrand = !brand || rowBrand === brand;
    const matchesMaterial = !material || rowMaterial === material;
    const matchesColor = !color || rowColor === color;
    const matchesSearch = rowText.includes(search);

    row.style.display = (matchesBrand && matchesMaterial && matchesColor && matchesSearch) ? '' : 'none';
  });
}

// Attach listeners
searchBar.addEventListener('input', applyFilters);
filterBrand.addEventListener('change', applyFilters);
filterMaterial.addEventListener('change', applyFilters);
filterColor.addEventListener('change', applyFilters);
