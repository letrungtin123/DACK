/*
array methods
1. length
2. concat
3. join
4. pop
5. push
6. shift
7. unshift
8. slice
9. splice
10. reverse
11. sort
21. random
22. rounded
23. floor
24. ceil
14. includes
12. find
13. findIndex
15. filter
16. map
17. reduce
18. some
19. every
20. forEach
*/

// 1. length: => cho biết độ dài của mảng
// console.log(`length: ${courses.length}`)

// 2. concat: => nối mảng
// console.log(courses2.concat(courses))

// 3. join => chuyển mảng thành chuỗi
// console.log(courses)
// console.log(courses.join(' - '))

// 4. toString() => chuyển mảng thành chuỗi
// console.log(courses.toString(' - '))

// 5. pop => xóa phần tử cuối mảng và trả về phần tử đó
// console.log('🚀 ~ courses truoc khi pop:', courses)
// console.log('tra ve phan tu bi xoa: ', courses.pop())
// console.log('🚀 ~ courses sau khi pop:', courses)

// 6. push => thêm phần tử vào cuối mảng và trả về độ dài mảng
// console.log(courses.push('Python'))
// console.log('🚀 ~ courses:', courses)

// 7. shift => xóa phần tử đầu mảng và trả về phần tử đó
// console.log('🚀 ~ courses truoc khi shift:', courses)
// console.log('tra ve phan tu bi xoa: ', courses.shift())
// console.log('🚀 ~ courses sau khi shift:', courses)

// 8. unshift => thêm phần tử vào đầu mảng và trả về độ dài mảng
// console.log(courses.unshift('Python'))
// console.log('🚀 ~ courses:', courses)

// 9. slice => cắt mảng từ vị trí start đến end
// console.log('🚀 ~ courses:', courses)
// console.log('khong truyen tham so vao: ', courses.slice()) // trả về mảng giống mảng gốc
// console.log('truyen 1 tham so vao: ', courses.slice(1)) // cắt từ vị trí 1 đến hết
// console.log('truyen 2 tham so vao: ', courses.slice(0, 4)) // cắt từ vị trí 0 đến 2

// *. replace => thay thế phần tử trong mảng

// 10. splice => xóa, thêm hoặc thay thế phần tử trong mảng
// console.log('🚀 ~ courses:', courses)
// console.log(courses.splice()) // trả về mảng giống mảng gốc
// console.log('tra ve phan tu bi xoa: ', courses.splice(0)) // xóa 1 phần tử từ vị trí 1
// console.log(courses.splice(1, 1)) // xóa 1 phần tử từ vị trí 1 và trả về phần tử đó
// console.log(courses.splice(0, 1, 'Python', 'HTML', 'CSS')) // thêm phần tử vào vị trí 1
// console.log('🚀 ~ courses:', courses)

// 11. reverse => đảo ngược mảng
// console.log(courses)
// console.log(courses.reverse())

// 12. sort => sắp xếp mảng
// console.log(courses)
// console.log(courses.sort())
// const numbers = [1, 7, 3, 5, 2, 4, 6]
// console.log(numbers.sort((a, b) => b - a))

// 13. find => tìm phần tử đầu tiên thỏa mãn điều kiện

// 14. random() => trả về số ngẫu nhiên từ 0 đến 1
// console.log(Math.random())

// 15. rounded() => làm tròn số nguyên gần nhất (làm tròn số)
// console.log(Math.round(1.4))
// console.log(Math.round(1.7))
// console.log(Math.round(1.5))

// 16. floor() => làm tròn xuống
// console.log(Math.floor(1.4))
// console.log(Math.floor(1.7))
// console.log(Math.floor(1.5))

// 17. ceil() => làm tròn lên
// console.log(Math.ceil(1.1))
// console.log(Math.ceil(1.7))
// console.log(Math.ceil(1.5))

// 18. includes => kiểm tra phần tử có tồn tại trong mảng không
// console.log('🚀 ~ courses:', courses)
// console.log(courses.includes('Rust'))

// 19. find => tìm phần tử đầu tiên thỏa mãn điều kiện và trả về phần tử đó
// const course = courses.find(function (value, index, array) {
//   // console.log('🚀 ~ course ~ value:', value)
//   return value.price === 500
// })
// console.log('🚀 ~ course ~ course:', course)

// 20. findIndex => tìm vị trí phần tử đầu tiên thỏa mãn điều kiện và trả về vị trí đó
// const course = courses.findIndex(function (value, index, array) {
//   // console.log('🚀 ~ course ~ value:', value)
//   return value.price === 500
// })
// console.log('🚀 ~ course ~ course:', course)

// 21. filter => lọc ra các phần tử thỏa mãn điều kiện và trả về mảng mới
// const course = courses.filter(function (value, index, array) {
//   return value.price === 500
// })
// console.log('🚀 ~ course ~ course:', course)

// 22. map => tạo mảng mới từ mảng cũ
// const course = courses.map(function (value, index, array) {
//   return value.price >> 300 // trả về mảng mới với giá trị là giá trị của phần tử cũ nhân 2
// })
// console.log('🚀 ~ course ~ course:', course)
// console.log(Boolean(0))

const numbers = [1, 2, 3, 4, 5]
// const sum = 0
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }
// console.log('🚀 ~ sum:', sum)
// 23. reduce => tính toán dữ liệu từ mảng và trả về kết quả
// const sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue
// }, 0)
// console.table('🚀 ~ sum ~ sum:', sum)

// const number = 7 // 1000
// const shiftNumber = number >> 2
// console.log('🚀 ~ shiftNumber:', shiftNumber) // 00

// demo callback
// const myFunction = function (callback) {
//   callback('Hello')
// }

// const myCallback = function (value) {
//   console.log('🚀 ~ value:', value)
// }

// myFunction(myCallback)

const courses = [
  { id: 1, name: 'Javascript', price: 0 },
  { id: 2, name: 'HTML, CSS', price: 0 },
  { id: 3, name: 'ReactJS', price: 0 },
  { id: 4, name: 'NodeJS', price: 0 },
  { id: 5, name: 'Python', price: 0 },
  { id: 6, name: 'Ruby', price: 0 }
]

/*
1. some
2. every
3. forEach
*/

// 1. some => kiểm tra xem có phần tử nào thỏa mãn điều kiện không => boolean => chỉ cần 1 phần tử thỏa mãn là trả về true
// const isFree = courses.some(function (value, index) {
//   return value.price === 0
// })
// console.log('🚀 ~ isFree ~ isFree:', isFree)

// 2. every => kiểm tra xem có phần tử nào không thỏa mãn điều kiện không => boolean => chỉ cần 1 phần tử không thỏa mãn là trả về false
// const isFree = courses.every(function (value, index) {
//   console.log('🚀 ~ isFree ~ index:', index)
//   return value.price === 0
// })
// console.log('🚀 ~ isFree ~ isFree:', isFree)

// 3. forEach => duyệt qua từng phần tử trong mảng
// courses.forEach(function (value, index) {
//   console.log('🚀 ~ value:', value)
//   console.log('🚀 ~ value ~ index:', index)
// })

// for (let index = 0; index < courses.length; index++) {
//   const course = courses[index]
//   console.log('🚀 ~ course:', course)
//   console.log('🚀 ~ index:', index)
// }

// for-in/for-of
// for-of: duyệt qua từng phần tử trong mảng => array[]
// for (const [index, course] of courses.entries()) {
//   console.log('🚀 ~ index, course:', index, course)
// }

// for-in: duyệt qua từng phần tử trong object
// const myObject = {
//   name: 'Javascript',
//   price: 100,
//   free: false,
//   createdAt: '2021-09-01'
// }

// // key: value

// for (const key in myObject) {
//   console.log('🚀 ~ value:', key, myObject[key])
// }
