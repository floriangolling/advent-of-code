let o={d:0,s:0}
require('fs').readFileSync('./inputs.txt','utf-8').split('\n').map(x=>x={a:x.split(' ')[0],b:parseInt(x.split(' ')[1])}).forEach(d=>{d.a=='forward'?o.s+=d.b:0;d.a=='up'?o.d-=d.b:0;d.a=='down'?o.d+=d.b:0;});console.log(o.d*o.s);

let i={d:0,s:0,a:0}
require('fs').readFileSync('./inputs.txt','utf-8').split('\n').map(x=>x={a:x.split(' ')[0],b:parseInt(x.split(' ')[1])}).forEach(d=>{if(d.a=='forward'){i.s+=d.b;i.d+=(i.a*d.b)}d.a=='up'?i.a-=d.b:0;d.a=='down'?i.a+=d.b:0;});console.log(i.s*i.d);