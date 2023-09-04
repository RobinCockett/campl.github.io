const html = `
<!-- HTML generated using hilite.me --><div style="background: #ededed; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">protocol <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">StringTerminalPut</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Put</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">StringTerminalGet</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Get</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> 
    <span style="font-weight: bold">StringTerminalClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">TopBot</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>

coprotocol <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Console</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">ConsolePut</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) 
    <span style="font-weight: bold">ConsoleGet</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Put</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) 
    <span style="font-weight: bold">ConsoleClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">TopBot</span> 

fun append <span style="font-weight: bold">::</span> [<span style="font-weight: bold">A</span>], [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">[]</span>, ts <span style="font-weight: bold">-&gt;</span> ts
    s<span style="font-weight: bold">:</span>ss, ts <span style="font-weight: bold">-&gt;</span> s <span style="font-weight: bold">:</span> append(ss,ts)

fun concat <span style="font-weight: bold">::</span> [[<span style="font-weight: bold">A</span>]] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
    s<span style="font-weight: bold">:</span>ss <span style="font-weight: bold">-&gt;</span> append(s, concat(ss))

defn
    fun intersperse <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span>,[<span style="font-weight: bold">A</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
        sep, <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
        sep, s<span style="font-weight: bold">:</span>ss <span style="font-weight: bold">-&gt;</span> s <span style="font-weight: bold">:</span> prependAll(sep, ss)
<span style="font-weight: bold">where</span>
    fun prependAll <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span>, [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">_</span>, <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
        sep, s<span style="font-weight: bold">:</span>ss <span style="font-weight: bold">-&gt;</span> sep <span style="font-weight: bold">:</span> s <span style="font-weight: bold">:</span> prependAll(sep, ss)

fun intercalate <span style="font-weight: bold">::</span> [<span style="font-weight: bold">A</span>], [[<span style="font-weight: bold">A</span>]] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
    sep, ss <span style="font-weight: bold">-&gt;</span> concat(intersperse(sep, ss))

codata <span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Fun</span>(<span style="font-weight: bold">A</span>,<span style="font-weight: bold">B</span>) <span style="font-weight: bold">=</span> 
    <span style="font-weight: bold">App</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span>,<span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">B</span>

fun map <span style="font-weight: bold">::</span> <span style="font-weight: bold">Fun</span>(<span style="font-weight: bold">A</span>,<span style="font-weight: bold">B</span>), [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">B</span>] <span style="font-weight: bold">=</span> 
    <span style="font-weight: bold">_</span>, <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
    hfun, t<span style="font-weight: bold">:</span>ts<span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">App</span>(t,hfun) <span style="font-weight: bold">:</span> map(hfun, ts)

fun concatMap <span style="font-weight: bold">::</span> <span style="font-weight: bold">Fun</span>(<span style="font-weight: bold">A</span>, [<span style="font-weight: bold">B</span>]), [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">B</span>] <span style="font-weight: bold">=</span>
    hfun,lst <span style="font-weight: bold">-&gt;</span> concat(map(hfun, lst))

fun showBool <span style="font-weight: bold">::</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">True</span> <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&quot;True&quot;</span>
    <span style="font-weight: bold">False</span> <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&quot;False&quot;</span>

defn
    fun transpose <span style="font-weight: bold">::</span> [[<span style="font-weight: bold">A</span>]] <span style="font-weight: bold">-&gt;</span> [[<span style="font-weight: bold">A</span>]] <span style="font-weight: bold">=</span> 
        <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
        <span style="font-weight: bold">[]:</span>ts <span style="font-weight: bold">-&gt;</span> transpose(ts)
        (s<span style="font-weight: bold">:</span>ss)<span style="font-weight: bold">:</span>ts <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> headstails(ts) <span style="font-weight: bold">of</span>
            nts <span style="font-weight: bold">-&gt;</span> (s <span style="font-weight: bold">:</span> concatMap( (<span style="font-weight: bold">App</span> <span style="font-weight: bold">:=</span> (head, <span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> head ), nts))
                <span style="font-weight: bold">:</span> transpose( ss <span style="font-weight: bold">:</span> map( (<span style="font-weight: bold">App</span> <span style="font-weight: bold">:=</span> (<span style="font-weight: bold">_</span>, tail) <span style="font-weight: bold">-&gt;</span> tail), nts ))
<span style="font-weight: bold">where</span>
    fun headstails <span style="font-weight: bold">::</span> [[<span style="font-weight: bold">A</span>]] <span style="font-weight: bold">-&gt;</span> [([<span style="font-weight: bold">A</span>], [<span style="font-weight: bold">A</span>])] <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
        <span style="font-weight: bold">[]:</span>ts <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">[]</span>, <span style="font-weight: bold">[]</span>) <span style="font-weight: bold">:</span> headstails(ts)
        (s<span style="font-weight: bold">:</span>ss)<span style="font-weight: bold">:</span>ts <span style="font-weight: bold">-&gt;</span> ([s], ss) <span style="font-weight: bold">:</span> headstails(ts)

<span style="font-style: italic">-- | logical and</span>
fun land <span style="font-weight: bold">::</span> <span style="font-weight: bold">Bool</span>, <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">True</span>, <span style="font-weight: bold">True</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
    <span style="font-weight: bold">_</span>,<span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>

<span style="font-style: italic">-- | logical not</span>
fun lnot <span style="font-weight: bold">::</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">True</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>
    <span style="font-weight: bold">False</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>

<span style="font-style: italic">-- | logical or</span>
fun lor <span style="font-weight: bold">::</span> <span style="font-weight: bold">Bool</span>, <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
    a,b <span style="font-weight: bold">-&gt;</span> lnot(land(a,b))

<span style="font-style: italic">-- | lazily ors a list together.</span>
fun or <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Bool</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span> 
    <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>
    <span style="font-weight: bold">True:_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
    <span style="font-weight: bold">False:</span>ts <span style="font-weight: bold">-&gt;</span> or(ts)

<span style="font-style: italic">-- | replciates an element n times in a list (n should be non negative) </span>
fun replicate <span style="font-weight: bold">::</span> <span style="font-weight: bold">Int</span>, <span style="font-weight: bold">A</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span> 
    0, <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
    n, s <span style="font-weight: bold">-&gt;</span> s <span style="font-weight: bold">:</span> replicate(n - 1, s)

<span style="font-weight: bold">data</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">A</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">Just</span>    <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">::</span>   <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>

<span style="font-weight: bold">data</span> <span style="font-weight: bold">Player</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span> 
    <span style="font-style: italic">-- X piece</span>
    <span style="font-weight: bold">X</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-style: italic">-- O piece</span>
    <span style="font-weight: bold">O</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>

fun flipPlayer <span style="font-weight: bold">::</span> <span style="font-weight: bold">Player</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Player</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">X</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">O</span>
    <span style="font-weight: bold">O</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">X</span>

<span style="font-style: italic">-- | Tests if two players are equal to each other</span>
fun eqPlayer <span style="font-weight: bold">::</span> <span style="font-weight: bold">Player</span>, <span style="font-weight: bold">Player</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">X</span>, <span style="font-weight: bold">X</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
    <span style="font-weight: bold">O</span>, <span style="font-weight: bold">O</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
    <span style="font-weight: bold">_</span>, <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>

<span style="font-style: italic">-- | the grid representation.</span>
codata <span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Grid</span> <span style="font-weight: bold">=</span> 
    <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>), <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>), <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>))
    <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>), <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>), <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>))
    <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>), <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>), <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>))

<span style="font-style: italic">-- | projections for triplets.</span>
fun fst <span style="font-weight: bold">::</span> (<span style="font-weight: bold">A</span>,<span style="font-weight: bold">B</span>,<span style="font-weight: bold">C</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">A</span> <span style="font-weight: bold">=</span>
    (a,b,c) <span style="font-weight: bold">-&gt;</span> a

fun snd <span style="font-weight: bold">::</span> (<span style="font-weight: bold">A</span>,<span style="font-weight: bold">B</span>,<span style="font-weight: bold">C</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">B</span> <span style="font-weight: bold">=</span>
    (a,b,c) <span style="font-weight: bold">-&gt;</span> b

fun thd <span style="font-weight: bold">::</span> (<span style="font-weight: bold">A</span>,<span style="font-weight: bold">B</span>,<span style="font-weight: bold">C</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">C</span> <span style="font-weight: bold">=</span>
    (a,b,c) <span style="font-weight: bold">-&gt;</span> c

<span style="font-style: italic">-- | indexes for the grids.. it goes row (character), then column (int)</span>
<span style="font-weight: bold">data</span> <span style="font-weight: bold">GridIx</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span> 
    <span style="font-weight: bold">A1</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">A2</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">A3</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">B1</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">B2</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">B3</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">C1</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">C2</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">C3</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>

<span style="font-style: italic">-- | converts a grid to a list of lists.</span>
defn
    fun gridToLists <span style="font-weight: bold">::</span> <span style="font-weight: bold">Grid</span> <span style="font-weight: bold">-&gt;</span> [[<span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>)]] <span style="font-weight: bold">=</span>
        (<span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> top, <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> mid,  <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> bot) <span style="font-weight: bold">-&gt;</span> 
            [tripletToList(top), tripletToList(mid), tripletToList(bot)]
<span style="font-weight: bold">where</span>
    fun tripletToList <span style="font-weight: bold">::</span> (<span style="font-weight: bold">A</span>,<span style="font-weight: bold">A</span>,<span style="font-weight: bold">A</span>) <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
        (a,b,c) <span style="font-weight: bold">-&gt;</span> [a,b,c]

<span style="font-style: italic">-- | test if the given player is a winner </span>
defn
    fun winner <span style="font-weight: bold">::</span> <span style="font-weight: bold">Player</span>, <span style="font-weight: bold">Grid</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span> 
        p, grid <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> gridToLists(grid) <span style="font-weight: bold">of</span>
            lsts <span style="font-weight: bold">-&gt;</span> or 
                ( 
                    <span style="font-style: italic">-- either: there is a horizontal line, vertical line, or diagonal line.</span>
                    [ or(map((<span style="font-weight: bold">App</span> <span style="font-weight: bold">:=</span> lst <span style="font-weight: bold">-&gt;</span> allIsPlayer(p, lst)), lsts))
                    , or(map((<span style="font-weight: bold">App</span> <span style="font-weight: bold">:=</span> lst <span style="font-weight: bold">-&gt;</span> allIsPlayer(p, lst)), transpose(lsts)))
                    , or(map((<span style="font-weight: bold">App</span> <span style="font-weight: bold">:=</span> lst <span style="font-weight: bold">-&gt;</span> allIsPlayer(p, lst)), getDiags(grid)))
                    ]
                )
<span style="font-weight: bold">where</span>
    fun allIsPlayer <span style="font-weight: bold">::</span> <span style="font-weight: bold">Player</span>, [<span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>)] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
        focusedp, ts <span style="font-weight: bold">-&gt;</span> 
            <span style="font-weight: bold">let</span> fun go <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>)] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
                    <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
                    <span style="font-weight: bold">Just</span>(p) <span style="font-weight: bold">:</span> ts <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> eqPlayer(focusedp,p)
                        <span style="font-weight: bold">then</span> go(ts)
                        <span style="font-weight: bold">else</span> <span style="font-weight: bold">False</span>
                    <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">:</span> ts <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>
            <span style="font-weight: bold">in</span> go(ts)


    fun getDiags <span style="font-weight: bold">::</span> <span style="font-weight: bold">Grid</span> <span style="font-weight: bold">-&gt;</span> [[<span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>)]] <span style="font-weight: bold">=</span> 
        grid <span style="font-weight: bold">-&gt;</span> 
            [ [ fst(<span style="font-weight: bold">TopRow</span>(grid)), snd(<span style="font-weight: bold">MidRow</span>(grid)), thd(<span style="font-weight: bold">BotRow</span>(grid))]
            , [ thd(<span style="font-weight: bold">TopRow</span>(grid)), snd(<span style="font-weight: bold">MidRow</span>(grid)), fst(<span style="font-weight: bold">BotRow</span>(grid))]
            ] 

<span style="font-style: italic">-- | tests if someone has won the game or not.</span>
defn
    fun wonOrTie <span style="font-weight: bold">::</span> <span style="font-weight: bold">Grid</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
        grid <span style="font-weight: bold">-&gt;</span> or([winner(<span style="font-weight: bold">O</span>, grid), winner(<span style="font-weight: bold">X</span>, grid), allIsJust(concat(gridToLists(grid)))]) 
<span style="font-weight: bold">where</span>
    fun allIsJust <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
        <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">:</span> <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>
        <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">:</span> ts <span style="font-weight: bold">-&gt;</span> allIsJust(ts)
        

<span style="font-style: italic">-- | show the grid (converts to string)</span>
defn
    fun showGrid <span style="font-weight: bold">::</span> <span style="font-weight: bold">Grid</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span> 
        grid <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> replicate(9, <span style="font-style: italic">&#39;-&#39;</span>) <span style="font-weight: bold">of</span>
            horizontalline <span style="font-weight: bold">-&gt;</span> 
                intercalate
                    (<span style="font-style: italic">&quot;</span><span style="font-weight: bold; font-style: italic">\n</span><span style="font-style: italic">&quot;</span>
                    ,
                        [ showRow(<span style="font-weight: bold">TopRow</span>(grid))
                        , horizontalline
                        , showRow(<span style="font-weight: bold">MidRow</span>(grid))
                        , horizontalline
                        , showRow(<span style="font-weight: bold">BotRow</span>(grid))
                        ]
                    )
<span style="font-weight: bold">where</span>
    fun showMaybePlayer <span style="font-weight: bold">::</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>) <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&quot; &quot;</span> 
        <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">O</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&quot;O&quot;</span> 
        <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">X</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&quot;X&quot;</span> 
    
    fun showRow <span style="font-weight: bold">::</span> (<span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>), <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>), <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Player</span>)) <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
        (a,b,c) <span style="font-weight: bold">-&gt;</span> concat( 
                    [ showMaybePlayer(a)
                    , <span style="font-style: italic">&quot; | &quot;</span>
                    , showMaybePlayer(b)
                    , <span style="font-style: italic">&quot; | &quot;</span>
                    , showMaybePlayer(c)
                    ]
                )

fun emptyGrid <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Grid</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">-&gt;</span> 
        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Nothing</span>, <span style="font-weight: bold">Nothing</span>, <span style="font-weight: bold">Nothing</span>)
        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Nothing</span>, <span style="font-weight: bold">Nothing</span>, <span style="font-weight: bold">Nothing</span>)
        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Nothing</span>, <span style="font-weight: bold">Nothing</span>, <span style="font-weight: bold">Nothing</span>)
        )

<span style="font-style: italic">-- | plays a move, returns Just the new grid if it exists, otherwise nothing.</span>
<span style="font-style: italic">-- lots of duplicated code -- no record syntax. The idea is pretty straightfoward:</span>
<span style="font-style: italic">-- If the position is a Just, then there is something already there, so you cannot</span>
<span style="font-style: italic">-- make a move there... Otherwise, if it is Nothing, then you can actually make a </span>
<span style="font-style: italic">-- move there...</span>
fun playMove <span style="font-weight: bold">::</span> <span style="font-weight: bold">Player</span>,<span style="font-weight: bold">GridIx</span>,<span style="font-weight: bold">Grid</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Grid</span>) <span style="font-weight: bold">=</span>
    p, ix, grid <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> ix <span style="font-weight: bold">of</span>
        <span style="font-weight: bold">A1</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> fst(<span style="font-weight: bold">TopRow</span>(grid)) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(
                        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Just</span>(p), snd(<span style="font-weight: bold">TopRow</span>(grid)), thd(<span style="font-weight: bold">TopRow</span>(grid))) 
                        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MidRow</span>(grid)
                        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">BotRow</span>(grid)
                        )
                    )
        <span style="font-weight: bold">A2</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> snd(<span style="font-weight: bold">TopRow</span>(grid)) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(
                        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (fst(<span style="font-weight: bold">TopRow</span>(grid)), <span style="font-weight: bold">Just</span>(p), thd(<span style="font-weight: bold">TopRow</span>(grid))) 
                        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MidRow</span>(grid)
                        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">BotRow</span>(grid)
                        )
                    )
        <span style="font-weight: bold">A3</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> thd(<span style="font-weight: bold">TopRow</span>(grid)) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(
                        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (fst(<span style="font-weight: bold">TopRow</span>(grid)), snd(<span style="font-weight: bold">TopRow</span>(grid)), <span style="font-weight: bold">Just</span>(p)) 
                        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MidRow</span>(grid)
                        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">BotRow</span>(grid)
                        )
                    )
        <span style="font-weight: bold">B1</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> fst(<span style="font-weight: bold">MidRow</span>(grid)) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(
                        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">TopRow</span>(grid)
                        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Just</span>(p), snd(<span style="font-weight: bold">MidRow</span>(grid)), thd(<span style="font-weight: bold">MidRow</span>(grid))) 
                        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">BotRow</span>(grid)
                        )
                    )
        <span style="font-weight: bold">B2</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> snd(<span style="font-weight: bold">MidRow</span>(grid)) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(
                        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">TopRow</span>(grid)
                        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (fst(<span style="font-weight: bold">MidRow</span>(grid)), <span style="font-weight: bold">Just</span>(p), thd(<span style="font-weight: bold">MidRow</span>(grid))) 
                        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">BotRow</span>(grid)
                        )
                    )
        <span style="font-weight: bold">B3</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> thd(<span style="font-weight: bold">MidRow</span>(grid)) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(
                        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">TopRow</span>(grid)
                        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (fst(<span style="font-weight: bold">MidRow</span>(grid)), snd(<span style="font-weight: bold">MidRow</span>(grid)), <span style="font-weight: bold">Just</span>(p)) 
                        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">BotRow</span>(grid)
                        )
                    )

        <span style="font-weight: bold">C1</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> fst(<span style="font-weight: bold">BotRow</span>(grid)) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(
                        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">TopRow</span>(grid)
                        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MidRow</span>(grid)
                        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Just</span>(p), snd(<span style="font-weight: bold">BotRow</span>(grid)), thd(<span style="font-weight: bold">BotRow</span>(grid))) 
                        )
                    )
        <span style="font-weight: bold">C2</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> snd(<span style="font-weight: bold">BotRow</span>(grid)) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(
                        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">TopRow</span>(grid)
                        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MidRow</span>(grid)
                        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (fst(<span style="font-weight: bold">BotRow</span>(grid)), <span style="font-weight: bold">Just</span>(p), thd(<span style="font-weight: bold">BotRow</span>(grid))) 
                        )
                    )
        <span style="font-weight: bold">C3</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> thd(<span style="font-weight: bold">BotRow</span>(grid)) <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
            <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(
                        ( <span style="font-weight: bold">TopRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">TopRow</span>(grid)
                        , <span style="font-weight: bold">MidRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MidRow</span>(grid)
                        , <span style="font-weight: bold">BotRow</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> (fst(<span style="font-weight: bold">BotRow</span>(grid)), snd(<span style="font-weight: bold">BotRow</span>(grid)), <span style="font-weight: bold">Just</span>(p)) 
                        )
                    )

<span style="font-style: italic">-- | parses a move index</span>
fun parseGridIx <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">GridIx</span>) <span style="font-weight: bold">=</span>
    <span style="font-style: italic">&quot;a1&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">A1</span>)
    <span style="font-style: italic">&quot;a2&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">A2</span>)
    <span style="font-style: italic">&quot;a3&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">A3</span>)
    <span style="font-style: italic">&quot;b1&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">B1</span>)
    <span style="font-style: italic">&quot;b2&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">B2</span>)
    <span style="font-style: italic">&quot;b3&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">B3</span>)
    <span style="font-style: italic">&quot;c1&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">C1</span>)
    <span style="font-style: italic">&quot;c2&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">C2</span>)
    <span style="font-style: italic">&quot;c3&quot;</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Just</span>(<span style="font-weight: bold">C3</span>)
    <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>

protocol 
    <span style="font-weight: bold">UserMoveSet</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span> 
        <span style="font-weight: bold">UserMoveSet</span>       <span style="font-weight: bold">::</span> <span style="font-weight: bold">Put</span>((<span style="font-weight: bold">Player</span>, <span style="font-weight: bold">Grid</span>) | <span style="font-weight: bold">T</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>
        <span style="font-weight: bold">UserMoveGameOver</span>  <span style="font-weight: bold">::</span> <span style="font-weight: bold">Put</span>(([<span style="font-weight: bold">Char</span>], <span style="font-weight: bold">Grid</span>) | <span style="font-weight: bold">TopBot</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>

    and

    <span style="font-weight: bold">UserMoveGet</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">T</span> <span style="font-weight: bold">=</span> 
        <span style="font-weight: bold">UserMoveGet</span>   <span style="font-weight: bold">::</span> <span style="font-weight: bold">Get</span>(<span style="font-weight: bold">Grid</span> | <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">T</span>
        <span style="font-weight: bold">UserMoveClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">TopBot</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">T</span>

defn 
    proc userMoveSetAndGet <span style="font-weight: bold">::</span> | <span style="font-weight: bold">UserMoveSet</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=</span> 
        |  usrmvset <span style="font-weight: bold">=&gt;</span>  _strterm <span style="font-weight: bold">-&gt;</span> hcase usrmvset <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">UserMoveSet</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                get (playerty, grid) on usrmvset

                hput <span style="font-weight: bold">StringTerminalPut</span> on _strterm
                put <span style="font-style: italic">&quot;The opponent made a move as follows.&quot;</span> on _strterm

                hput <span style="font-weight: bold">StringTerminalPut</span> on _strterm
                put showGrid(grid) on _strterm

                userMoveGetLoop( playerty, grid | usrmvset <span style="font-weight: bold">=&gt;</span>  _strterm)

            <span style="font-weight: bold">UserMoveGameOver</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                get (gameovermsg, grid) on usrmvset

                hput <span style="font-weight: bold">StringTerminalPut</span> on _strterm
                put gameovermsg on _strterm

                hput <span style="font-weight: bold">StringTerminalPut</span> on _strterm
                put showGrid(grid) on _strterm

                hput <span style="font-weight: bold">StringTerminalClose</span> on _strterm
                close _strterm

                halt usrmvset

    proc userMoveGetLoop <span style="font-weight: bold">::</span> <span style="font-weight: bold">Player</span>, <span style="font-weight: bold">Grid</span> | <span style="font-weight: bold">UserMoveGet</span> <span style="font-weight: bold">=&gt;</span>  <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=</span> 
        playerty, grid |  usrmvget <span style="font-weight: bold">=&gt;</span>  _strterm <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            hput <span style="font-weight: bold">StringTerminalPut</span> on _strterm
            put <span style="font-style: italic">&quot;Please enter a move (given by [a-c][1-3]) where [a-c] denotes the row and [1-3] denotes the column:&quot;</span> on _strterm

            hput <span style="font-weight: bold">StringTerminalGet</span> on _strterm
            get inp on _strterm

            <span style="font-weight: bold">case</span> parseGridIx(inp) <span style="font-weight: bold">of</span>
                <span style="font-weight: bold">Just</span>(nix) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> playMove(playerty, nix, grid) <span style="font-weight: bold">of</span>
                    <span style="font-weight: bold">Just</span>(ngrid) <span style="font-weight: bold">-&gt;</span> hcase usrmvget <span style="font-weight: bold">of</span>
                        <span style="font-weight: bold">UserMoveGet</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            put ngrid on usrmvget

                            hput <span style="font-weight: bold">StringTerminalPut</span> on _strterm
                            put <span style="font-style: italic">&quot;Nice move! The board is now as follows.&quot;</span> on _strterm

                            hput <span style="font-weight: bold">StringTerminalPut</span> on _strterm
                            put showGrid(ngrid) on _strterm

                            userMoveSetAndGet( | usrmvget <span style="font-weight: bold">=&gt;</span> _strterm)

                    <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> userMoveGetInvalidMove( playerty, grid | usrmvget <span style="font-weight: bold">=&gt;</span>  _strterm)

                <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> userMoveGetInvalidMove( playerty, grid | usrmvget <span style="font-weight: bold">=&gt;</span>  _strterm)

    proc userMoveGetInvalidMove <span style="font-weight: bold">::</span> <span style="font-weight: bold">Player</span>, <span style="font-weight: bold">Grid</span> | <span style="font-weight: bold">UserMoveGet</span> <span style="font-weight: bold">=&gt;</span>  <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=</span> 
        playerty, grid |  usrmvget <span style="font-weight: bold">=&gt;</span>  _strterm <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            hput <span style="font-weight: bold">StringTerminalPut</span> on _strterm
            put <span style="font-style: italic">&quot;Invalid move.&quot;</span> on _strterm

            userMoveGetLoop(playerty, grid | usrmvget <span style="font-weight: bold">=&gt;</span>  _strterm)

protocol 
    <span style="font-weight: bold">Passer</span>(|<span style="font-weight: bold">M</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">Passer</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">M</span> (+) <span style="font-weight: bold">T</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>

    and 

    <span style="font-weight: bold">PassBack</span>(|<span style="font-weight: bold">M</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">T</span> <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">PassBack</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Neg</span>(<span style="font-weight: bold">M</span>) (*) <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">T</span>
        <span style="font-weight: bold">Passed</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">TopBot</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">T</span>

protocol <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | )  <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span> 
    <span style="font-weight: bold">MemPut</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Put</span>(<span style="font-weight: bold">A</span>| <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">MemGet</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Get</span>(<span style="font-weight: bold">A</span>| <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">MemClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">TopBot</span>  <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>

proc memCell <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span> | <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span>| ) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">=</span>
    v | ch <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">-&gt;</span> hcase ch <span style="font-weight: bold">of</span>
        <span style="font-weight: bold">MemPut</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            get nv on ch
            memCell(nv | ch <span style="font-weight: bold">=&gt;</span> )

        <span style="font-weight: bold">MemGet</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            put v on ch
            memCell(v | ch <span style="font-weight: bold">=&gt;</span> )

        <span style="font-weight: bold">MemClose</span> <span style="font-weight: bold">-&gt;</span> 
            halt ch

proc playerO <span style="font-weight: bold">::</span> | <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Passer</span>( | <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Grid</span> |)), <span style="font-weight: bold">UserMoveSet</span> <span style="font-weight: bold">=</span>
    | <span style="font-weight: bold">=&gt;</span> passermem, usrmvset <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
        hput <span style="font-weight: bold">Passer</span> on passermem
        split passermem into mem, passer

        <span style="font-style: italic">-- get the current board state</span>
        hput <span style="font-weight: bold">MemGet</span> on mem 
        get grid on mem

        <span style="font-weight: bold">if</span> wonOrTie(grid)
            <span style="font-style: italic">-- someone has won, so just clean everything up</span>
            <span style="font-weight: bold">then</span> <span style="font-weight: bold">do</span>
                hput <span style="font-weight: bold">MemClose</span> on mem
                close mem

                hput <span style="font-weight: bold">UserMoveGameOver</span> on usrmvset
                put (<span style="font-weight: bold">if</span> winner(<span style="font-weight: bold">O</span>, grid) <span style="font-weight: bold">then</span> <span style="font-style: italic">&quot;You won!&quot;</span> <span style="font-weight: bold">else</span> <span style="font-style: italic">&quot;You did not win!&quot;</span>, grid) on usrmvset
                close usrmvset
                
                hput <span style="font-weight: bold">Passed</span> on passer
                halt passer

            <span style="font-style: italic">-- no one has won, so continue the game</span>
            <span style="font-weight: bold">else</span> <span style="font-weight: bold">do</span>
                <span style="font-style: italic">-- set the user board</span>
                hput <span style="font-weight: bold">UserMoveSet</span>  on usrmvset
                put (<span style="font-weight: bold">O</span>, grid) on usrmvset

                <span style="font-style: italic">-- query the new user board</span>
                hput <span style="font-weight: bold">UserMoveGet</span>  on usrmvset
                get ngrid on usrmvset

                <span style="font-style: italic">-- set the new board state</span>
                hput <span style="font-weight: bold">MemPut</span> on mem
                put ngrid on mem

                hput <span style="font-weight: bold">PassBack</span> on passer
                <span style="font-style: italic">-- do the passer thing </span>
                fork passer as
                    nmem with mem <span style="font-weight: bold">-&gt;</span> nmem |=| neg mem
                    npasser with usrmvset <span style="font-weight: bold">-&gt;</span> 
                        playerO( | <span style="font-weight: bold">=&gt;</span> npasser, usrmvset )

defn
    proc playerX <span style="font-weight: bold">::</span> | <span style="font-weight: bold">Passer</span>( | <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Grid</span> |)) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Grid</span> | ), <span style="font-weight: bold">UserMoveSet</span>  <span style="font-weight: bold">=</span>
        | passermem <span style="font-weight: bold">=&gt;</span>  mem, usrmvset <span style="font-weight: bold">-&gt;</span> hcase passermem <span style="font-weight: bold">of</span>
            <span style="font-weight: bold">Passer</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                <span style="font-style: italic">-- get the current board state</span>
                hput <span style="font-weight: bold">MemGet</span> on mem 
                get grid on mem

                <span style="font-style: italic">-- really should hcase here to see if the game is done</span>
                <span style="font-weight: bold">if</span> wonOrTie(grid)
                    <span style="font-weight: bold">then</span> <span style="font-weight: bold">do</span>
                        goPasserMem( grid | passermem <span style="font-weight: bold">=&gt;</span> mem, usrmvset)

                    <span style="font-weight: bold">else</span> <span style="font-weight: bold">do</span>
                        <span style="font-style: italic">-- set the user board</span>
                        hput <span style="font-weight: bold">UserMoveSet</span>  on usrmvset
                        put (<span style="font-weight: bold">X</span>, grid) on usrmvset

                        <span style="font-style: italic">-- query the new user board</span>
                        hput <span style="font-weight: bold">UserMoveGet</span>  on usrmvset
                        get ngrid on usrmvset

                        <span style="font-style: italic">-- set the new board state</span>
                        hput <span style="font-weight: bold">MemPut</span> on mem
                        put ngrid on mem

                        goPasserMem( ngrid | passermem <span style="font-weight: bold">=&gt;</span> mem, usrmvset)

    proc goPasserMem <span style="font-weight: bold">::</span> <span style="font-weight: bold">Grid</span> | <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Grid</span>|) (+) <span style="font-weight: bold">PassBack</span>( | <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Grid</span>|)) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">Grid</span>|), <span style="font-weight: bold">UserMoveSet</span> <span style="font-weight: bold">=</span>
        grid | passermem <span style="font-weight: bold">=&gt;</span> mem, usrmvset <span style="font-weight: bold">-&gt;</span> fork passermem as
            nmem with mem <span style="font-weight: bold">-&gt;</span> mem |=| nmem

            passer with usrmvset <span style="font-weight: bold">-&gt;</span> hcase passer <span style="font-weight: bold">of</span>
                <span style="font-weight: bold">PassBack</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    split passer into nmem, npasser
                    plug 
                        playerX( | npasser <span style="font-weight: bold">=&gt;</span> nnmem, usrmvset)
                        nnmem,nmem  <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">-&gt;</span> nmem |=| neg nnmem 
                <span style="font-weight: bold">Passed</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    hput <span style="font-weight: bold">UserMoveGameOver</span> on usrmvset
                    put (<span style="font-weight: bold">if</span> winner(<span style="font-weight: bold">X</span>, grid) <span style="font-weight: bold">then</span> <span style="font-style: italic">&quot;You won!&quot;</span> <span style="font-weight: bold">else</span> <span style="font-style: italic">&quot;You did not win!&quot;</span>, grid) on usrmvset
                    close usrmvset

                    halt passer
        
proc run <span style="font-weight: bold">=</span>
    | <span style="font-weight: bold">=&gt;</span> _strtermO, _strtermX <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
        plug 
            userMoveSetAndGet( | usrmvO <span style="font-weight: bold">=&gt;</span> _strtermO)
            userMoveSetAndGet( | usrmvX <span style="font-weight: bold">=&gt;</span>  _strtermX)

            playerO( |        <span style="font-weight: bold">=&gt;</span> passer, usrmvO )
            playerX( | passer <span style="font-weight: bold">=&gt;</span> mem, usrmvX)

            memCell(emptyGrid | mem <span style="font-weight: bold">=&gt;</span> )
</pre></div>
`;

const Page = () => (
  <main>
    <div className="md:px-48 xxl:px-80 my-32">
      <h1>Tic Tac Toe</h1>
      <div
        className="mt-8 bg-light_gray inline-block p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  </main>
);
export default Page;
