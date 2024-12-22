// Fungsi utama untuk Radix Sort
function radixSort(arr) {
    // Fungsi untuk mendapatkan digit pada posisi tertentu
    const getDigit = (num, place) => {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    };

    // Fungsi untuk menghitung jumlah digit maksimum dalam array
    const getMaxDigits = (nums) => {
        let maxDigits = 0;
        for (let num of nums) {
            maxDigits = Math.max(maxDigits, Math.floor(Math.log10(Math.abs(num))) + 1);
        }
        return maxDigits;
    };

    // Tentukan jumlah digit maksimum dalam array
    const maxDigits = getMaxDigits(arr);

    // Proses pengelompokan dan pengurutan berdasarkan digit
    for (let k = 0; k < maxDigits; k++) {
        // Buat 10 bucket (0-9)
        let buckets = Array.from({ length: 10 }, () => []);

        // Masukkan setiap elemen ke bucket yang sesuai berdasarkan digit saat ini
        for (let num of arr) {
            const digit = getDigit(num, k);
            buckets[digit].push(num);
        }

        // menggaabungkan semua bucket menjadi satu array
        arr = [].concat(...buckets);
    }

    return arr;
}

// Contoh penggunaan sorting Radixsort
const data = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Sebelum sorting:", data);
const sortedData = radixSort(data);
console.log("Setelah sorting:", sortedData);
