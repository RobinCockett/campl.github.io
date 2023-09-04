const html = `
<!-- HTML generated using hilite.me --><div style="background: #ededed; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">protocol <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">StringTerminalGet</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Get</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> 
    <span style="font-weight: bold">StringTerminalPut</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Put</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">StringTerminalClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">TopBot</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>

coprotocol <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Console</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">ConsolePut</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) 
    <span style="font-weight: bold">ConsoleGet</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Put</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) 
    <span style="font-weight: bold">ConsoleClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">TopBot</span>

    <span style="font-weight: bold">ConsoleStringTerminal</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> (*) <span style="font-weight: bold">Neg</span>(<span style="font-weight: bold">StringTerminal</span>)

coprotocol  <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">MemCell</span> (<span style="font-weight: bold">A</span> | ) <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">MemPut</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>(<span style="font-weight: bold">A</span>|<span style="font-weight: bold">S</span>) 
    <span style="font-weight: bold">MemGet</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Put</span>(<span style="font-weight: bold">A</span>|<span style="font-weight: bold">S</span>) 
    <span style="font-weight: bold">MemCls</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">TopBot</span> 

coprotocol <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">ListP</span>( | <span style="font-weight: bold">M</span>)  <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">ConsP</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">M</span> (+) <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">NilP</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">M</span>

coprotocol <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Timer</span> <span style="font-weight: bold">=</span>
    <span style="font-style: italic">-- timer in microseconds</span>
    <span style="font-weight: bold">Timer</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>(<span style="font-weight: bold">Int</span> | <span style="font-weight: bold">S</span> (*) <span style="font-weight: bold">Put</span>( () | <span style="font-weight: bold">TopBot</span>))
    <span style="font-weight: bold">TimerClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">TopBot</span>

fun append <span style="font-weight: bold">::</span> [<span style="font-weight: bold">A</span>],[<span style="font-weight: bold">A</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">[]</span>,ts <span style="font-weight: bold">-&gt;</span> ts
    s<span style="font-weight: bold">:</span>ss,ts <span style="font-weight: bold">-&gt;</span> s <span style="font-weight: bold">:</span> append(ss,ts)

fun concat <span style="font-weight: bold">::</span> [[<span style="font-weight: bold">A</span>]] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
	<span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
	s<span style="font-weight: bold">:</span>ss <span style="font-weight: bold">-&gt;</span> append(s, concat(ss))
    
<span style="font-style: italic">-- | ticket data type. </span>
codata <span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Ticket</span> <span style="font-weight: bold">=</span> 
    <span style="font-weight: bold">Name</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>]
    <span style="font-weight: bold">Description</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>]
    <span style="font-weight: bold">Number</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Int</span>

<span style="font-style: italic">-- | wrapper for making a ticket</span>
fun mkTicket <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>],[<span style="font-weight: bold">Char</span>],<span style="font-weight: bold">Int</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Ticket</span> <span style="font-weight: bold">=</span> 
    name, description,number <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Name</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> name,  <span style="font-weight: bold">Description</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> description, <span style="font-weight: bold">Number</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> number)


<span style="font-style: italic">-- | a process for storing a sequential value in its argument,</span>
<span style="font-style: italic">-- which offers a protocol of &#39;MemCell&#39; to get,put, and close</span>
<span style="font-style: italic">-- the memory cell</span>
proc memCell <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span> |  <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | ) <span style="font-weight: bold">=</span>
    val | <span style="font-weight: bold">=&gt;</span> ch  <span style="font-weight: bold">-&gt;</span> hcase ch <span style="font-weight: bold">of</span>
        <span style="font-weight: bold">MemPut</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            get nval on ch
            memCell(nval | <span style="font-weight: bold">=&gt;</span> ch )
        <span style="font-weight: bold">MemGet</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            put val on ch
            memCell(val | <span style="font-weight: bold">=&gt;</span> ch )
        <span style="font-weight: bold">MemCls</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            halt ch

<span style="font-weight: bold">data</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">A</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">Just</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>

<span style="font-style: italic">-- | parses an int </span>
defn 
    fun pInt <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Int</span>) <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
        str <span style="font-weight: bold">-&gt;</span> go(<span style="font-weight: bold">Just</span>(0), str)

<span style="font-weight: bold">where</span>
    fun charToDigit <span style="font-weight: bold">::</span> <span style="font-weight: bold">Char</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Int</span>) <span style="font-weight: bold">=</span>
        <span style="font-style: italic">&#39;0&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(0)
        <span style="font-style: italic">&#39;1&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(1)
        <span style="font-style: italic">&#39;2&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(2)
        <span style="font-style: italic">&#39;3&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(3)
        <span style="font-style: italic">&#39;4&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(4)
        <span style="font-style: italic">&#39;5&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(5)
        <span style="font-style: italic">&#39;6&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(6)
        <span style="font-style: italic">&#39;7&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(7)
        <span style="font-style: italic">&#39;8&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(8)
        <span style="font-style: italic">&#39;9&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(9)
        <span style="font-weight: bold">_</span>   <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>


    fun step <span style="font-weight: bold">::</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Int</span>),<span style="font-weight: bold">Char</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Int</span>) <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">Nothing</span>, <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
        <span style="font-weight: bold">Just</span>(n), c <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> charToDigit(c) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(nn) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(n * 10 + nn)
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>

    fun go <span style="font-weight: bold">::</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Int</span>),[<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Int</span>) <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">Nothing</span>, <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
        res, <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> res
        res, s<span style="font-weight: bold">:</span>ss <span style="font-weight: bold">-&gt;</span> go(step(res,s), ss)

<span style="font-style: italic">-- | time in seconds for the time out of the clients</span>
fun tIMEOUT <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Int</span>  <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">-&gt;</span> 15 * 1000000

defn
    fun showInt <span style="font-weight: bold">::</span> <span style="font-weight: bold">Int</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
        0 <span style="font-weight: bold">-&gt;</span> [<span style="font-style: italic">&#39;0&#39;</span>]
        n <span style="font-weight: bold">-&gt;</span> go(n, <span style="font-weight: bold">[]</span>)
<span style="font-weight: bold">where</span>
    <span style="font-style: italic">-- this does integer division for a,b as input</span>
    <span style="font-style: italic">-- and outputs (q,r) where q is the integer division and r </span>
    <span style="font-style: italic">-- is the remainder.</span>
    fun divqr <span style="font-weight: bold">::</span> <span style="font-weight: bold">Int</span>, <span style="font-weight: bold">Int</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Int</span>, <span style="font-weight: bold">Int</span>) <span style="font-weight: bold">=</span>
        a, b <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> a &lt; b
            <span style="font-weight: bold">then</span> (0, a)
            <span style="font-weight: bold">else</span> <span style="font-weight: bold">case</span> divqr(a - b, b) <span style="font-weight: bold">of</span>
                (q, r) <span style="font-weight: bold">-&gt;</span>  (q + 1, r)

    fun intToDigit <span style="font-weight: bold">::</span> <span style="font-weight: bold">Int</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Char</span> <span style="font-weight: bold">=</span>
        0 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;0&#39;</span>
        1 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;1&#39;</span>
        2 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;2&#39;</span>
        3 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;3&#39;</span>
        4 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;4&#39;</span>
        5 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;5&#39;</span>
        6 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;6&#39;</span>
        7 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;7&#39;</span>
        8 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;8&#39;</span>
        9 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;9&#39;</span>
        <span style="font-style: italic">-- in the use cases of this program, this will never happen!</span>
        <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;#&#39;</span>

    fun go <span style="font-weight: bold">::</span> <span style="font-weight: bold">Int</span>, [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
        0, acc <span style="font-weight: bold">-&gt;</span> acc
        n, acc <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> divqr(n, 10) <span style="font-weight: bold">of</span>
            (q, r) <span style="font-weight: bold">-&gt;</span> go(q, intToDigit(r)<span style="font-weight: bold">:</span>acc)

fun showTickets <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Ticket</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span> 
    <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&quot;&quot;</span>
    (<span style="font-weight: bold">Name</span> <span style="font-weight: bold">:=</span> name, <span style="font-weight: bold">Description</span> <span style="font-weight: bold">:=</span> description, <span style="font-weight: bold">Number</span> <span style="font-weight: bold">:=</span> number )<span style="font-weight: bold">:</span>ss <span style="font-weight: bold">-&gt;</span> 
        concat(
            [ <span style="font-style: italic">&quot;Ticket name: &quot;</span>
            , name
            , <span style="font-style: italic">&quot;</span><span style="font-weight: bold; font-style: italic">\n</span><span style="font-style: italic">&quot;</span>
            , <span style="font-style: italic">&quot;Description: &quot;</span>
            , description
            , <span style="font-style: italic">&quot;</span><span style="font-weight: bold; font-style: italic">\n</span><span style="font-style: italic">&quot;</span>
            , <span style="font-style: italic">&quot;Ticket number: &quot;</span>
            , showInt(number)
            , <span style="font-style: italic">&quot;</span><span style="font-weight: bold; font-style: italic">\n</span><span style="font-style: italic">&quot;</span>
            , <span style="font-style: italic">&quot;</span><span style="font-weight: bold; font-style: italic">\n</span><span style="font-style: italic">&quot;</span>
            , showTickets(ss)
            ]
            )
        

<span style="font-style: italic">-- | typical passer type to pass a channel between</span>
<span style="font-style: italic">-- 2 processes.</span>
coprotocol <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Passer</span>( | <span style="font-weight: bold">M</span> ) <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">Passer</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">M</span> (*) (<span style="font-weight: bold">Neg</span>(<span style="font-weight: bold">M</span>) (+) <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">S</span>)) 

defn 
    proc clientLeaf <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Ticket</span>] | <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>( | <span style="font-weight: bold">Timer</span> (*) <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>]| ))) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=</span> 
        curtickets | passer <span style="font-weight: bold">=&gt;</span>  strterm <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
            put <span style="font-style: italic">&quot;Type: &lt;:my-tickets&gt;, &lt;:view&gt;, or &lt;:book&gt;.&quot;</span> on strterm

            hput <span style="font-weight: bold">StringTerminalGet</span> on strterm
            get userinp on strterm

            <span style="font-weight: bold">case</span> userinp <span style="font-weight: bold">of</span>
                <span style="font-style: italic">&quot;:my-tickets&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put <span style="font-style: italic">&quot;The current tickets you hold are as follows.&quot;</span> on strterm

                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put showTickets(curtickets) on strterm

                    clientLeaf( curtickets | passer <span style="font-weight: bold">=&gt;</span> strterm)
                    
                <span style="font-style: italic">&quot;:view&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put <span style="font-style: italic">&quot;Viewing available tickets....&quot;</span> on strterm

                    put () on passer

                    hput <span style="font-weight: bold">Passer</span> on passer
                    split passer into m, negmandnpasser
                    split m into timer, mem

                    hput <span style="font-weight: bold">MemGet</span> on mem
                    get inp on mem

                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put showTickets(inp) on strterm

                    clientLeafLoop( curtickets | timer,mem, negmandnpasser <span style="font-weight: bold">=&gt;</span> strterm )

                <span style="font-style: italic">&quot;:book&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    <span style="font-style: italic">-- start of duplicated from &quot;:view&quot;</span>
                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put <span style="font-style: italic">&quot;Viewing available tickets...&quot;</span> on strterm

                    put () on passer
                    
                    hput <span style="font-weight: bold">Passer</span> on passer
                    split passer into m, negmandnpasser
                    split m into timer, mem

                    hput <span style="font-weight: bold">MemGet</span> on mem
                    get inp on mem

                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put showTickets(inp) on strterm
                    <span style="font-style: italic">-- end of duplicated from &quot;:view&quot;</span>

                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put <span style="font-style: italic">&quot;Please enter the ticket number you would like to book (you will timeout if you take too long!)...&quot;</span> on strterm

                    hput <span style="font-weight: bold">StringTerminalGet</span> on strterm

                    <span style="font-style: italic">-- set up the timer</span>
                    hput <span style="font-weight: bold">Timer</span> on timer
                    put tIMEOUT on timer 

                    split timer into timer0, timer1

                    race 
                        strterm <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            <span style="font-style: italic">-- getting the user input</span>
                            get userinp on strterm

                            
                            <span style="font-weight: bold">case</span> pInt(userinp) <span style="font-weight: bold">of</span> 
                                <span style="font-weight: bold">Just</span>(userinp) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> focusTicket(userinp, inp) <span style="font-weight: bold">of</span>
                                    <span style="font-weight: bold">Just</span>( (tkt, tkts) ) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                        hput <span style="font-weight: bold">MemPut</span> on mem
                                        put tkts on mem

                                        hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                                        put <span style="font-style: italic">&quot;Booking succeeded!&quot;</span> on strterm

                                        bookLoop( tkt <span style="font-weight: bold">:</span> curtickets | timer0, timer1, mem, negmandnpasser <span style="font-weight: bold">=&gt;</span> strterm)
                                        
                                    <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                        hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                                        put <span style="font-style: italic">&quot;Booking failed! Ticket does not exist.. Please book again...&quot;</span> on strterm

                                        bookLoop( curtickets | timer0, timer1, mem, negmandnpasser <span style="font-weight: bold">=&gt;</span> strterm)
                                <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span>  <span style="font-weight: bold">do</span>
                                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                                    put <span style="font-style: italic">&quot;Booking failed! You did not input a ticket number.. Please book again...&quot;</span> on strterm

                                    bookLoop( curtickets | timer0, timer1, mem, negmandnpasser <span style="font-weight: bold">=&gt;</span> strterm)


                        timer1 <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            get () on timer1

                            close timer1

                            <span style="font-style: italic">-- we need to do this plug, so we can return the memory cell </span>
                            <span style="font-style: italic">-- before we get user input </span>
                            plug 
                                z <span style="font-weight: bold">=&gt;</span> strterm <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    get <span style="font-weight: bold">_</span> on strterm
                                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                                    put <span style="font-style: italic">&quot;Booking failed! Sorry you timed out! Please try and book again...&quot;</span> on strterm

                                    z |=| strterm
                                clientLeafLoop(curtickets | timer0,mem,negmandnpasser <span style="font-weight: bold">=&gt;</span> z) 


                    
                    
                <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put <span style="font-style: italic">&quot;Sorry, I didn&#39;t understand your input.&quot;</span> on strterm
                    clientLeaf( curtickets | passer <span style="font-weight: bold">=&gt;</span> strterm)

    proc clientLeafLoop 
        <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Ticket</span>] 
        | <span style="font-weight: bold">Timer</span>
        , <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>] |)
        , <span style="font-weight: bold">Neg</span> (<span style="font-weight: bold">Timer</span>  (*) <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>] |)) (+) <span style="font-weight: bold">Get</span> (() | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">Timer</span> (*) <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>] |))) 
        <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=</span>
            curtickets | ntimer,mem,negmandnpasser <span style="font-weight: bold">=&gt;</span> strterm <span style="font-weight: bold">-&gt;</span> fork negmandnpasser as 
                negm <span style="font-weight: bold">-&gt;</span> plug
                    negm, z <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">-&gt;</span> negm |=| neg z 
                    ntimer,mem <span style="font-weight: bold">=&gt;</span> z <span style="font-weight: bold">-&gt;</span> fork z as
                        l <span style="font-weight: bold">-&gt;</span> l |=| ntimer
                        r <span style="font-weight: bold">-&gt;</span> r |=| mem
                npasser <span style="font-weight: bold">-&gt;</span> clientLeaf( curtickets | npasser <span style="font-weight: bold">=&gt;</span> strterm)


    proc bookLoop 
        <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Ticket</span>] 
        | <span style="font-weight: bold">Timer</span>
            <span style="font-style: italic">-- ^ the timer</span>
        , <span style="font-weight: bold">Put</span>( () | <span style="font-weight: bold">TopBot</span>) 
            <span style="font-style: italic">-- ^ the timer which has been peeled back</span>
        , <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>] |)
        , <span style="font-weight: bold">Neg</span> (<span style="font-weight: bold">Timer</span>  (*) <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>] |)) (+) <span style="font-weight: bold">Get</span> (() | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">Timer</span> (*) <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>] |))) 
        <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=</span> 
            curtickets | timer0,timer1,mem,negmandnpasser <span style="font-weight: bold">=&gt;</span> strterm <span style="font-weight: bold">-&gt;</span> plug 
                timer0, timer1 <span style="font-weight: bold">=&gt;</span> nntimer <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    fork nntimer as
                        nntimer0 with timer0 <span style="font-weight: bold">-&gt;</span> nntimer0 |=| timer0
                        nntimer1 with timer1 <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            get <span style="font-weight: bold">_</span> on timer1
                            close timer1
                            halt nntimer1
                nntimer <span style="font-weight: bold">=&gt;</span> ntimer <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    split nntimer into nntimer0,nntimer1
                    close nntimer1
                    nntimer0 |=| ntimer

                ntimer,mem,negmandnpasser <span style="font-weight: bold">=&gt;</span> strterm <span style="font-weight: bold">-&gt;</span> 
                    clientLeafLoop(curtickets | ntimer,mem,negmandnpasser <span style="font-weight: bold">=&gt;</span> strterm) 

<span style="font-weight: bold">where</span>
    fun focusTicket <span style="font-weight: bold">::</span> <span style="font-weight: bold">Int</span>, [<span style="font-weight: bold">Ticket</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Maybe</span>( (<span style="font-weight: bold">Ticket</span>, [<span style="font-weight: bold">Ticket</span>]) )<span style="font-weight: bold">=</span> 
        n, tickets <span style="font-weight: bold">-&gt;</span> 
            <span style="font-weight: bold">let</span> fun go <span style="font-weight: bold">=</span>
                    <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
                    s<span style="font-weight: bold">:</span>ss <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> <span style="font-weight: bold">Number</span>(s) == n
                        <span style="font-weight: bold">then</span> <span style="font-weight: bold">Just</span>( (s, ss) )
                        <span style="font-weight: bold">else</span> <span style="font-weight: bold">case</span> go(ss) <span style="font-weight: bold">of</span> 
                            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
                            <span style="font-weight: bold">Just</span>( (t,ts) ) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>( (t,s<span style="font-weight: bold">:</span>ts) )
            <span style="font-weight: bold">in</span> go(tickets)


<span style="font-style: italic">-- | a node in the list</span>
defn
    proc node <span style="font-weight: bold">::</span> | <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">M</span>)) <span style="font-weight: bold">=&gt;</span>  <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">M</span>)), <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">M</span>))  <span style="font-weight: bold">=</span> 
        | up <span style="font-weight: bold">=&gt;</span> lch, rch <span style="font-weight: bold">-&gt;</span> race 
            lch <span style="font-weight: bold">-&gt;</span> nodeLoop(|up <span style="font-weight: bold">=&gt;</span> lch, rch)
            rch <span style="font-weight: bold">-&gt;</span> nodeLoop(|up <span style="font-weight: bold">=&gt;</span> rch, lch)

    proc nodeLoop <span style="font-weight: bold">::</span> | <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">M</span>)) <span style="font-weight: bold">=&gt;</span>  <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">M</span>)), <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">M</span>))  <span style="font-weight: bold">=</span> 
        | up <span style="font-weight: bold">=&gt;</span> winner, loser <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            get <span style="font-weight: bold">_</span> on winner
            put () on up

            hput <span style="font-weight: bold">Passer</span> on up 
            split up into upmem, negupmemandnup

            hcase winner <span style="font-weight: bold">of</span> <span style="font-weight: bold">Passer</span> <span style="font-weight: bold">-&gt;</span> fork winner as
                winnermem <span style="font-weight: bold">-&gt;</span> upmem |=| winnermem
                negmemandnwinner <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    split negmemandnwinner into negmem,nwinner

                    fork negupmemandnup as
                        negupmem <span style="font-weight: bold">-&gt;</span> negupmem  |=| negmem
                        nup <span style="font-weight: bold">-&gt;</span> plug 
                            node( | nup <span style="font-weight: bold">=&gt;</span> nwinner, nloser )
                            nloser <span style="font-weight: bold">=&gt;</span> loser <span style="font-weight: bold">-&gt;</span> loser |=| nloser 

<span style="font-style: italic">-- | the root in the multi memory cell. This essentially acts</span>
<span style="font-style: italic">-- as the central mediator for the leaves. </span>
proc root <span style="font-weight: bold">::</span> | <span style="font-weight: bold">M</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">M</span>))  <span style="font-weight: bold">=</span>
    | m  <span style="font-weight: bold">=&gt;</span> ch <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
        get <span style="font-weight: bold">_</span> on ch
        hcase ch <span style="font-weight: bold">of</span> <span style="font-weight: bold">Passer</span> <span style="font-weight: bold">-&gt;</span> fork ch as 
            rm <span style="font-weight: bold">-&gt;</span> m |=| rm
            negmandnch <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                split negmandnch into negm,nch
                plug 
                    root( | nm <span style="font-weight: bold">=&gt;</span> nch )
                    <span style="font-weight: bold">=&gt;</span> negm, nm <span style="font-weight: bold">-&gt;</span> negm |=| neg nm


<span style="font-style: italic">-- | The root of the multi memory cell which again acts as the</span>
<span style="font-style: italic">-- central. Moreover, this allows a console to help spawn additional </span>
<span style="font-style: italic">-- clients... </span>
defn
    proc server 
        <span style="font-weight: bold">::</span> 
        <span style="font-weight: bold">Int</span>
        | <span style="font-weight: bold">Console</span>, <span style="font-weight: bold">Timer</span> (*) <span style="font-weight: bold">MemCell</span>( [<span style="font-weight: bold">Ticket</span>] | ) 
        <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">Timer</span> (*) <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>]|))) <span style="font-weight: bold">=</span> 
            freshtknum | console, m <span style="font-weight: bold">=&gt;</span> racedpasser <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                hput <span style="font-weight: bold">ConsolePut</span> on console
                put <span style="font-style: italic">&quot;Type &lt;:new-client&gt; &lt;:new-ticket &lt;NAME&gt; &lt;DESCRIPTION&gt;&gt; &lt;:view&gt; &quot;</span> on console

                hput <span style="font-weight: bold">ConsoleGet</span> on console

                serverLoop( freshtknum | console, m <span style="font-weight: bold">=&gt;</span> racedpasser)

    proc serverLoop 
        <span style="font-weight: bold">::</span> 
        <span style="font-weight: bold">Int</span>
        | <span style="font-weight: bold">Put</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">Console</span>)
        , <span style="font-weight: bold">Timer</span> (*) <span style="font-weight: bold">MemCell</span>( [<span style="font-weight: bold">Ticket</span>] |) 
        <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">Timer</span> (*) <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>]|))) <span style="font-weight: bold">=</span>
            <span style="font-style: italic">-- we need to race the console and the memory cell stuff</span>
            <span style="font-style: italic">-- since these inputs should not depend on each other.</span>
            freshtknum | console, m <span style="font-weight: bold">=&gt;</span> racedpasser <span style="font-weight: bold">-&gt;</span> race 
                console <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    get inp on console

                    <span style="font-weight: bold">case</span> pArgs(inp) <span style="font-weight: bold">of</span> 
                        [<span style="font-style: italic">&quot;:new-client&quot;</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            hput <span style="font-weight: bold">ConsolePut</span> on console
                            put <span style="font-style: italic">&quot;Spawning new client...&quot;</span> on console

                            hput <span style="font-weight: bold">ConsoleStringTerminal</span> on console
                            split console into nconsole, negstrterm

                            plug 
                                negstrterm, strterm <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">-&gt;</span> negstrterm |=| neg strterm

                                node( | up <span style="font-weight: bold">=&gt;</span> racedpasser, nleaf)
                                clientLeaf( <span style="font-weight: bold">[]</span> | nleaf <span style="font-weight: bold">=&gt;</span> strterm)

                                server( freshtknum | nconsole, m <span style="font-weight: bold">=&gt;</span> up)
                        [<span style="font-style: italic">&quot;:new-ticket&quot;</span>, name, desc] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            split m into timer,mem

                            hput <span style="font-weight: bold">MemGet</span> on mem
                            get memtkts on mem

                            hput <span style="font-weight: bold">MemPut</span> on mem
                            put mkTicket(name, desc, freshtknum) <span style="font-weight: bold">:</span> memtkts on mem

                            hput <span style="font-weight: bold">ConsolePut</span> on console
                            put <span style="font-style: italic">&quot;Ticket added...&quot;</span> on console

                            memCellLoop( 1 + freshtknum  | console, timer,mem <span style="font-weight: bold">=&gt;</span> racedpasser) 

                        <span style="font-style: italic">-- more or less duplciated from &quot;:new-ticket&quot;</span>
                        [<span style="font-style: italic">&quot;:view&quot;</span> ] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            split m into timer,mem

                            hput <span style="font-weight: bold">MemGet</span> on mem
                            get memtkts on mem

                            hput <span style="font-weight: bold">ConsolePut</span> on console
                            put <span style="font-style: italic">&quot;All tickets currently available are as follows...&quot;</span> on console

                            hput <span style="font-weight: bold">ConsolePut</span> on console
                            put showTickets(memtkts) on console

                            memCellLoop( freshtknum  | console, timer,mem <span style="font-weight: bold">=&gt;</span> racedpasser) 

                        <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            hput <span style="font-weight: bold">ConsolePut</span> on console
                            put <span style="font-style: italic">&quot;Invalid input, please try again...&quot;</span> on console
                            server( freshtknum | console, m <span style="font-weight: bold">=&gt;</span> racedpasser)
                            

                <span style="font-style: italic">-- duplicated code from &#39;root&#39; above.</span>
                racedpasser <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    get <span style="font-weight: bold">_</span> on racedpasser
                    hcase racedpasser <span style="font-weight: bold">of</span> <span style="font-weight: bold">Passer</span> <span style="font-weight: bold">-&gt;</span> fork racedpasser as 
                        rm <span style="font-weight: bold">-&gt;</span> m |=| rm
                        negmandnracedpasser <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            split negmandnracedpasser into negm,nracedpasser
                            plug 
                                serverLoop( freshtknum | console,nm <span style="font-weight: bold">=&gt;</span> nracedpasser )
                                <span style="font-weight: bold">=&gt;</span> negm, nm <span style="font-weight: bold">-&gt;</span> negm |=| neg nm

    <span style="font-style: italic">-- | wrapper to help with options that loop with the memory cell </span>
    proc memCellLoop <span style="font-weight: bold">::</span>  
        <span style="font-weight: bold">Int</span>
        | <span style="font-weight: bold">Console</span>
        , <span style="font-weight: bold">Timer</span> 
        , <span style="font-weight: bold">MemCell</span>( [<span style="font-weight: bold">Ticket</span>] |) 
        <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">Timer</span> (*) <span style="font-weight: bold">MemCell</span>([<span style="font-weight: bold">Ticket</span>]|))) <span style="font-weight: bold">=</span>
            freshtknum | console, timer, mem <span style="font-weight: bold">=&gt;</span> racedpasser <span style="font-weight: bold">-&gt;</span> plug
                    mem, timer <span style="font-weight: bold">=&gt;</span> nm  <span style="font-weight: bold">-&gt;</span> fork nm as
                        l <span style="font-weight: bold">-&gt;</span> l |=| timer
                        r <span style="font-weight: bold">-&gt;</span> r |=| mem
                    server( freshtknum | console, nm <span style="font-weight: bold">=&gt;</span> racedpasser)

<span style="font-style: italic">-- uhh bnfc apparently does not do the offside rule correctly?</span>
<span style="font-weight: bold">where</span> {
    defn 
        fun pArgs <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> [[<span style="font-weight: bold">Char</span>]] <span style="font-weight: bold">=</span> 
            ts <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> skipSpace(ts) <span style="font-weight: bold">of</span>
                <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span> 
                nt<span style="font-weight: bold">:</span>nts <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> nt <span style="font-weight: bold">of</span>
                    <span style="font-style: italic">&#39;&quot;&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> sliceUntilQuote(nts) <span style="font-weight: bold">of</span> (wrd,nnts) <span style="font-weight: bold">-&gt;</span> wrd <span style="font-weight: bold">:</span> pArgs(nnts)

                    <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> sliceUntilSpace(nt<span style="font-weight: bold">:</span>nts) <span style="font-weight: bold">of</span> (wrd,nnts) <span style="font-weight: bold">-&gt;</span> wrd <span style="font-weight: bold">:</span> pArgs(nnts)
    <span style="font-weight: bold">where</span> 
        fun isSpace <span style="font-weight: bold">::</span> <span style="font-weight: bold">Char</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span> 
            <span style="font-style: italic">&#39; &#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
            <span style="font-style: italic">&#39;</span><span style="font-weight: bold; font-style: italic">\t</span><span style="font-style: italic">&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
            <span style="font-style: italic">&#39;</span><span style="font-weight: bold; font-style: italic">\n</span><span style="font-style: italic">&#39;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
            <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>

        fun skipSpace <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
            <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
            t<span style="font-weight: bold">:</span>ts <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> isSpace(t) <span style="font-weight: bold">then</span> skipSpace(ts) <span style="font-weight: bold">else</span> t<span style="font-weight: bold">:</span>ts

        fun sliceUntilSpace <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> ([<span style="font-weight: bold">Char</span>], [<span style="font-weight: bold">Char</span>]) <span style="font-weight: bold">=</span>
            <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">[]</span>, <span style="font-weight: bold">[]</span>)
            t<span style="font-weight: bold">:</span>ts <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> isSpace(t) 
                <span style="font-weight: bold">then</span> (<span style="font-weight: bold">[]</span>, t<span style="font-weight: bold">:</span>ts)
                <span style="font-weight: bold">else</span> <span style="font-weight: bold">case</span> sliceUntilSpace(ts) <span style="font-weight: bold">of</span>
                    (ls, rs) <span style="font-weight: bold">-&gt;</span> (t<span style="font-weight: bold">:</span>ls, rs)

        fun sliceUntilQuote <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> ([<span style="font-weight: bold">Char</span>], [<span style="font-weight: bold">Char</span>]) <span style="font-weight: bold">=</span>
            <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">[]</span>, <span style="font-weight: bold">[]</span>)
            <span style="font-style: italic">&#39;</span><span style="font-weight: bold; font-style: italic">\\</span><span style="font-style: italic">&#39;</span><span style="font-weight: bold">:</span><span style="font-style: italic">&#39;&quot;&#39;</span><span style="font-weight: bold">:</span>ts <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> sliceUntilQuote(ts) <span style="font-weight: bold">of</span> (ls, rs) <span style="font-weight: bold">-&gt;</span> (<span style="font-style: italic">&#39;</span><span style="font-weight: bold; font-style: italic">\\</span><span style="font-style: italic">&#39;</span><span style="font-weight: bold">:</span><span style="font-style: italic">&#39;&quot;&#39;</span><span style="font-weight: bold">:</span>ls, rs)
            t<span style="font-weight: bold">:</span>ts <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> t ==  <span style="font-style: italic">&#39;&quot;&#39;</span>
                <span style="font-style: italic">-- we drop the quote</span>
                <span style="font-weight: bold">then</span> (<span style="font-weight: bold">[]</span>, ts)
                <span style="font-weight: bold">else</span> <span style="font-weight: bold">case</span> sliceUntilQuote(ts) <span style="font-weight: bold">of</span>
                    (ls, rs) <span style="font-weight: bold">-&gt;</span> (t<span style="font-weight: bold">:</span>ls, rs)

}

<span style="font-style: italic">-- | time in seconds for the time out of the clients</span>
fun iNIT_FRESH_TICKET_ID <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Int</span>  <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">-&gt;</span> 0

proc run <span style="font-weight: bold">=</span> 
    | timer, console <span style="font-weight: bold">=&gt;</span> strterm <span style="font-weight: bold">-&gt;</span> plug
        <span style="font-style: italic">-- memCell( [mkTicket(&quot;Temmie&quot;, &quot;A cute white and cream colored pomeranian&quot;, 0) ] | =&gt; mem  )</span>
        memCell( <span style="font-weight: bold">[]</span> | <span style="font-weight: bold">=&gt;</span> mem  )

        timer, mem <span style="font-weight: bold">=&gt;</span> m <span style="font-weight: bold">-&gt;</span> fork m as
            l <span style="font-weight: bold">-&gt;</span> l |=| timer
            r <span style="font-weight: bold">-&gt;</span> r |=| mem

        server( iNIT_FRESH_TICKET_ID | console, m <span style="font-weight: bold">=&gt;</span> tail)
        clientLeaf( <span style="font-weight: bold">[]</span> | tail <span style="font-weight: bold">=&gt;</span> strterm)
</pre></div>
`;

const Page = () => (
  <main>
    <div className="md:px-48 xxl:px-80 my-32">
      <h1>Ticket Booking</h1>
      <div
        className="mt-8 bg-light_gray inline-block p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  </main>
);
export default Page;
