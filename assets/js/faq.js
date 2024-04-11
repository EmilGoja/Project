document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function(item) {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function() {
      const content = item.querySelector('.accordion-content');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';

      accordionItems.forEach(function(otherItem) {
        const otherIcon = otherItem.querySelector('.accordion-header i');
        if (otherIcon !== header.querySelector('i')) {
          otherIcon.classList.remove('rotate');
        }
      });

      const icon = header.querySelector('i');
      icon.classList.toggle('rotate');
      
      accordionItems.forEach(function(otherItem) {
        if (otherItem !== item) {
          otherItem.querySelector('.accordion-content').style.display = 'none';
        }
      });
    });
  });
});
