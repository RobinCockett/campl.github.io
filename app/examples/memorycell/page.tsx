const html = `
<!-- HTML generated using hilite.me --><div style="overflow:auto;width:auto;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%"> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46</pre></td><td><pre style="margin-left: 5px; line-height: 125%">proc p1 <span style="font-weight: bold">::</span> | <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Int</span> |) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Int</span> |) <span style="font-weight: bold">=</span>
       | passer <span style="font-weight: bold">=&gt;</span> mem <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            hput <span style="font-weight: bold">MemGet</span> on mem
            get inp on mem
            passer |=| mem
            
            
 proc p2 <span style="font-weight: bold">::</span> | <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">MemCell</span>( <span style="font-weight: bold">Int</span> |) <span style="font-weight: bold">=</span> 
   | <span style="font-weight: bold">=&gt;</span> passer <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
           hput <span style="font-weight: bold">MemGet</span> on passer
           get inp on passer
           hput <span style="font-weight: bold">MemCls</span> on passer
           halt passer
           
           
 proc runner <span style="font-weight: bold">::</span> | <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">=</span>
    | <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">-&gt;</span> plug
         memCell(0 | memch <span style="font-weight: bold">=&gt;</span> )
          | <span style="font-weight: bold">=&gt;</span> memch <span style="font-weight: bold">-&gt;</span> plug
                p1(| passer <span style="font-weight: bold">=&gt;</span> memch )
                p2(| <span style="font-weight: bold">=&gt;</span> passer )
protocol <span style="font-weight: bold">Passer</span>( | <span style="font-weight: bold">M</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
     <span style="font-weight: bold">Pass</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">M</span> (+) (<span style="font-weight: bold">Neg</span>(<span style="font-weight: bold">M</span>) (*) <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>

proc p1 <span style="font-weight: bold">::</span> | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Int</span> |)) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Int</span> |) <span style="font-weight: bold">=</span>
	| passer <span style="font-weight: bold">=&gt;</span> mem <span style="font-weight: bold">-&gt;</span> hcase passer <span style="font-weight: bold">of</span>
        <span style="font-weight: bold">Pass</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span> 
          hput <span style="font-weight: bold">MemGet</span> on mem 
          get inp on mem 
          fork passer as 
            nmem <span style="font-weight: bold">-&gt;</span> nmem |=| mem
            negmemnpasser <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span> 
               split negmemnpasser into negmem, npasser 
               plug 
            	 p1( | npasser <span style="font-weight: bold">=&gt;</span> z ) 
            	 z, negmem <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">-&gt;</span> negmem |=| neg z
                           
proc p2 <span style="font-weight: bold">::</span> | <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Passer</span> ( | <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Char</span>]|)) <span style="font-weight: bold">=</span>
	| <span style="font-weight: bold">=&gt;</span> passer <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
      hput <span style="font-weight: bold">Pass</span> on passer
      split passer into mem, negmemnpasser
      hput <span style="font-weight: bold">MemGet</span> on mem
      get inp on mem
      fork negmemnpasser as
      	negmem <span style="font-weight: bold">-&gt;</span> negmem |=| neg mem
      	npasser <span style="font-weight: bold">-&gt;</span> p2 ( | <span style="font-weight: bold">=&gt;</span> npasser )
</pre></td></tr></table></div>
`;

const Page = () => (
  <main>
    <div className="md:px-48 h-screen xxl:px-80 my-32">
        <h1>MemoryCell</h1>
      <div
        className="mt-8 bg-light_gray inline-block p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  </main>
);
export default Page;
