/*
inheritance কাকে বলে? 

একটি ক্লাসের কমন প্রপার্টি গুল নিজের মধ্যে ধারণ করাকে inheritance বলে। যেহেতু জাভাস্ক্রিপ্টে ক্লাস নেই তাই আমাদেরকে অবজেক্টকেই ক্লাস ধরে নিতে হচ্ছে। আর যেহেতু অবজেক্ট নিয়ে কাজ করতে হচ্ছে তাই এখানে আর একটি টার্ম চলে আসে তা হল প্রোটোটাইপ এবং prototypical inheritance । 

এখন বুঝতে হবে prototype কি?  prototype হল প্রত্যেকটি object এর প্যারেন্ট base এবং এই প্যারেন্ট base এর মাধ্যমে যেই inheritance টি ঘটান হয় সেটাকেই বলে prototypical inheritance । 

Multy Level inheritance কি?
সাপস একটি অবজেক্ট সেটা ইনহারিট হয়েছে তার প্যারেন্ট থেকে এবং সেই অবজেক্ট টি inherit হয়েছে তার parnt থেকে । এটাকেই বলা হচ্ছে মুলটি লেভেল inheritance ।
*/

// Multy Level Inheritance

// function inherit(name) {
//     this.name = name
// }
// var multy = new inherit('Nayem')
// console.log(multy)