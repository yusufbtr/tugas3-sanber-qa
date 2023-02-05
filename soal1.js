const prompt=require("prompt-sync")({sigint:true}); 


const angka = prompt('Masukan angka : ');

if (angka % 2 == 0 ){
    const hasil = Math.sqrt(angka);
    console.log('Nilai akar pangkat 2 dari ' + angka + ' adalah ' + hasil);
}
else if (angka <= 0){
    console.log('Tidak bisa input bilangan negatif');
}
else {
    console.log('Tidak bisa input bilangan ganjil');
}