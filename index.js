let x={},s=(S='',A=3,T='krgybmcw')=>[...T].map((a,i)=>x[a+S*10]=`\x1b[${i+A}m`)&&s
s()('b',4)('i',9)('bi',10)('',0,'/*#_=! ^-~')
export default s=>s.replace(/{(.+?)}/g,(_,c)=>x[c]||_)
