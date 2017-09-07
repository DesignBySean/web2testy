console.log('hello sean!')
document.write('<h1> Hi!</h1>')

adj_list = ["bitter","lemon-flavored","spicy","bland","minty","sweet","delicious","pickled","tangy","fruity","salty"]
noun_list = ["army", "navy", "airforce", "marines"]

noun = noun_list[Math.floor(Math.random()*noun_list.length]
adj = adj_list[Math.floor(Math.random()*adj_list.length]

sentence_a = "She loved the "+adj+" taste of apples and loved the "+noun+"."
document.write(sentence_a)

sentence_b = " I do not know why she likes "+adj+" food."
document.write(sentence_b)

sentence_c = " Even though she loves the "+noun+" she thought about joining the "+noun+"."
document.write(sentence_c)

alert('AWESOME')
prompt('Do you love '+adj_list[5]+' products?')
