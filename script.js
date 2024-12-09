document.addEventListener('DOMContentLoaded', function() {
  const btnPC = document.querySelector('#btn-pc');
  const btnAPK = document.querySelector('#btn-apk'); 
  
  btnPC.addEventListener('click', function() {
    const link1 = document.createElement('a');
    link1.href = 'pc.zip';
    link1.download = 'pc.zip';
    link1.style.display = 'none';
    document.body.appendChild(link1);
    link1.click();
    document.body.removeChild(link1);
  });

  btnAPK.addEventListener('click', function() {
    const link2 = document.createElement('a');
    link2.href = 'Slime.apk';
    link2.download = 'Slime.apk';
    link2.style.display = 'none';
    document.body.appendChild(link2);
    link2.click();
    document.body.removeChild(link2);
  });
});
