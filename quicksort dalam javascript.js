function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Jika array hanya memiliki 1 elemen atau kosong, sudah terurut
    }
  
    // Pilih pivot (di sini kita pilih elemen terakhir)
    const pivot = arr[arr.length - 1];
  
    // Inisialisasi dua array kosong untuk menyimpan elemen yang lebih kecil dan lebih besar dari pivot
    const left = [];
    const right = [];
  
    // Bagi array berdasarkan pivot
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Panggil quickSort secara rekursif untuk subarray kiri dan kanan
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Contoh penggunaan
  const numbers = [10, 5, 8, 0, 3];
  const sortedNumbers = quickSort(numbers);
  console.log(sortedNumbers); // Output: [0, 3, 5, 8, 10]