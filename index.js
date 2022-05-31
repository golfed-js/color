let x={},s=(S='',A=30,T='krgybmcw')=>[...T].map((a,i)=>x[a+S]=`\x1b[${i+A}m`)&&s
s()('b',40)('i',90)('bi',100)('',0,'/*#_=! ^-~')
export default s=>s.replace(/{(.+?)}/g,(_,c)=>x[c]||_)
