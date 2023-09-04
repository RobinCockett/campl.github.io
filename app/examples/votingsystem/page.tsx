const html = `
<!-- HTML generated using hilite.me --><div style="background: #ededed; overflow:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">protocol <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">StringTerminalGet</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Get</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> 
    <span style="font-weight: bold">StringTerminalPut</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Put</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">StringTerminalClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">TopBot</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>

coprotocol <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Console</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">ConsolePut</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>)
    <span style="font-weight: bold">ConsoleGet</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Put</span>( [<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">S</span>)
    <span style="font-weight: bold">ConsoleClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">TopBot</span>

coprotocol <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Timer</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">Timer</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Get</span>(<span style="font-weight: bold">Int</span> | <span style="font-weight: bold">S</span> (*) <span style="font-weight: bold">Put</span>( () | <span style="font-weight: bold">TopBot</span>))
    <span style="font-weight: bold">TimerClose</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">TopBot</span>

protocol <span style="font-weight: bold">MemCell</span> (<span style="font-weight: bold">A</span> | ) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">M</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">MemPut</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Put</span>(<span style="font-weight: bold">A</span>|<span style="font-weight: bold">M</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">M</span>
    <span style="font-weight: bold">MemGet</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Get</span>(<span style="font-weight: bold">A</span>|<span style="font-weight: bold">M</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">M</span> 
    <span style="font-weight: bold">MemCls</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">TopBot</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">M</span>

fun append <span style="font-weight: bold">::</span> [<span style="font-weight: bold">A</span>],[<span style="font-weight: bold">A</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">[]</span>,ts <span style="font-weight: bold">-&gt;</span> ts
    s<span style="font-weight: bold">:</span>ss,ts <span style="font-weight: bold">-&gt;</span> s <span style="font-weight: bold">:</span> append(ss,ts)

fun concat <span style="font-weight: bold">::</span> [[<span style="font-weight: bold">A</span>]] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">A</span>] <span style="font-weight: bold">=</span>
	<span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
	s<span style="font-weight: bold">:</span>ss <span style="font-weight: bold">-&gt;</span> append(s, concat(ss))

fun land <span style="font-weight: bold">::</span> <span style="font-weight: bold">Bool</span>, <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">True</span>, <span style="font-weight: bold">True</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
    <span style="font-weight: bold">_</span>, <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>
    
fun not <span style="font-weight: bold">::</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">True</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>
    <span style="font-weight: bold">False</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>

fun stringEqual <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>], [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">[]</span>, <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">True</span>
    (x<span style="font-weight: bold">:</span>xs), (y<span style="font-weight: bold">:</span>ys) <span style="font-weight: bold">-&gt;</span> land(x == y, stringEqual(xs, ys))
    <span style="font-weight: bold">_</span>, <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">False</span>

protocol <span style="font-weight: bold">Passer</span>( | <span style="font-weight: bold">M</span> ) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">Passer</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">M</span> (+) (<span style="font-weight: bold">Neg</span>(<span style="font-weight: bold">M</span>) (*) <span style="font-weight: bold">Put</span>(() | <span style="font-weight: bold">S</span>)) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> 

proc memCell <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span> | <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | ) <span style="font-weight: bold">=&gt;</span>  <span style="font-weight: bold">=</span>
    val | ch <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">-&gt;</span> hcase ch <span style="font-weight: bold">of</span>
        <span style="font-weight: bold">MemPut</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            get nval on ch
            memCell(nval | ch <span style="font-weight: bold">=&gt;</span> )
        <span style="font-weight: bold">MemGet</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            put val on ch
            memCell(val | ch <span style="font-weight: bold">=&gt;</span> )
        <span style="font-weight: bold">MemCls</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            halt ch

<span style="font-weight: bold">data</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">A</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">Just</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>

<span style="font-weight: bold">data</span> <span style="font-weight: bold">Either</span>(<span style="font-weight: bold">A</span>, <span style="font-weight: bold">B</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">Left</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">Right</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">B</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">S</span>

codata <span style="font-weight: bold">F</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Fun</span>(<span style="font-weight: bold">A</span>, <span style="font-weight: bold">B</span>) <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">App</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">A</span>, <span style="font-weight: bold">F</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">B</span>

fun map <span style="font-weight: bold">::</span> [<span style="font-weight: bold">A</span>], <span style="font-weight: bold">Fun</span>(<span style="font-weight: bold">A</span>, <span style="font-weight: bold">B</span>) <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">B</span>] <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">[]</span>, <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
    (x<span style="font-weight: bold">:</span>xs), f <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">App</span>(x, f)<span style="font-weight: bold">:</span>map(xs,f)

defn
    fun showInt <span style="font-weight: bold">::</span> <span style="font-weight: bold">Int</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
        0 <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&quot;0&quot;</span>
        n <span style="font-weight: bold">-&gt;</span> convert(n, <span style="font-weight: bold">[]</span>)
<span style="font-weight: bold">where</span>
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
        <span style="font-weight: bold">_</span> <span style="font-weight: bold">-&gt;</span> <span style="font-style: italic">&#39;#&#39;</span>

    fun divqr <span style="font-weight: bold">::</span> <span style="font-weight: bold">Int</span>, <span style="font-weight: bold">Int</span> <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Int</span>, <span style="font-weight: bold">Int</span>) <span style="font-weight: bold">=</span>
        a, b <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> a &lt; b
            <span style="font-weight: bold">then</span> (0, a)
            <span style="font-weight: bold">else</span> <span style="font-weight: bold">case</span> divqr(a - b, b) <span style="font-weight: bold">of</span>
                (q, r) <span style="font-weight: bold">-&gt;</span>  (q + 1, r)

    fun convert <span style="font-weight: bold">::</span> <span style="font-weight: bold">Int</span>, [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
        0, acc <span style="font-weight: bold">-&gt;</span> acc
        n, acc <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">case</span> divqr(n, 10) <span style="font-weight: bold">of</span>
            (q, r) <span style="font-weight: bold">-&gt;</span> convert(q, intToDigit(r)<span style="font-weight: bold">:</span>acc)


codata <span style="font-weight: bold">V</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Voter</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">Name</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">V</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>]
    <span style="font-weight: bold">HasVoted</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">V</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span>
    <span style="font-weight: bold">IsVoting</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">V</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Bool</span>

fun makeVoter <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>], <span style="font-weight: bold">Bool</span>, <span style="font-weight: bold">Bool</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Voter</span> <span style="font-weight: bold">=</span> 
    name, hasVoted, isVoting <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Name</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> name,  <span style="font-weight: bold">HasVoted</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> hasVoted, <span style="font-weight: bold">IsVoting</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> isVoting)

codata <span style="font-weight: bold">C</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Candidate</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">CName</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">C</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>]
    <span style="font-weight: bold">VoteCount</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">C</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Int</span>

fun makeCandidate <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>], <span style="font-weight: bold">Int</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Candidate</span> <span style="font-weight: bold">=</span> 
    name, voteCount <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">CName</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> name,  <span style="font-weight: bold">VoteCount</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> voteCount)

codata <span style="font-weight: bold">M</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MemData</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">Voters</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">M</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Voter</span>]
    <span style="font-weight: bold">Candidates</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">M</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Candidate</span>]

fun makeMemData <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Voter</span>], [<span style="font-weight: bold">Candidate</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MemData</span> <span style="font-weight: bold">=</span>
    voters, candidates <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Voters</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> voters, <span style="font-weight: bold">Candidates</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> candidates)

protocol <span style="font-weight: bold">Vote</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=</span>
    <span style="font-weight: bold">ValidateVoter</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Put</span>([<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">Get</span>(<span style="font-weight: bold">Either</span>([<span style="font-weight: bold">Char</span>], <span style="font-weight: bold">Voter</span>) | <span style="font-weight: bold">S</span>)) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">SubmitVote</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Put</span>([<span style="font-weight: bold">Char</span>] | <span style="font-weight: bold">Get</span>(<span style="font-weight: bold">Either</span>([<span style="font-weight: bold">Char</span>], ()) | <span style="font-weight: bold">S</span>)) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">GetResults</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">Get</span>([<span style="font-weight: bold">Candidate</span>] | <span style="font-weight: bold">S</span>) <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>
    <span style="font-weight: bold">QuitVoting</span> <span style="font-weight: bold">::</span> <span style="font-weight: bold">S</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">S</span>

defn
    proc votingClient <span style="font-weight: bold">::</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Voter</span>) | <span style="font-weight: bold">Timer</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Vote</span>, <span style="font-weight: bold">StringTerminal</span> <span style="font-weight: bold">=</span>
        maybeVoter | timer <span style="font-weight: bold">=&gt;</span> vch, strterm <span style="font-weight: bold">-&gt;</span>
            <span style="font-weight: bold">case</span> maybeVoter <span style="font-weight: bold">of</span>
                <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put <span style="font-style: italic">&quot;Please enter your name or press r to see the results:&quot;</span> on strterm

                    hput <span style="font-weight: bold">StringTerminalGet</span> on strterm
                    get userInput on strterm
                    <span style="font-weight: bold">case</span> stringEqual(userInput, <span style="font-style: italic">&quot;r&quot;</span>) <span style="font-weight: bold">of</span>
                        <span style="font-weight: bold">True</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            hput <span style="font-weight: bold">GetResults</span> on vch
                            get results on vch
                            hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                            put showResults(results) on strterm
                            votingClient(<span style="font-weight: bold">Nothing</span> | timer <span style="font-weight: bold">=&gt;</span> vch, strterm)

                        <span style="font-weight: bold">False</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            hput <span style="font-weight: bold">ValidateVoter</span> on vch
                            put userInput on vch
                            get response on vch

                            <span style="font-weight: bold">case</span> response <span style="font-weight: bold">of</span>
                                <span style="font-weight: bold">Left</span>(<span style="font-weight: bold">error</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                                    put <span style="font-weight: bold">error</span> on strterm
                                    votingClient(<span style="font-weight: bold">Nothing</span> | timer <span style="font-weight: bold">=&gt;</span> vch, strterm)
                                <span style="font-weight: bold">Right</span>(voter) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    votingClient(<span style="font-weight: bold">Just</span>(voter) | timer <span style="font-weight: bold">=&gt;</span> vch, strterm)

                <span style="font-weight: bold">Just</span>(voter) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                    put <span style="font-style: italic">&quot;Please enter your candidate&#39;s name:&quot;</span> on strterm

                    hput <span style="font-weight: bold">StringTerminalGet</span> on strterm

                    hput <span style="font-weight: bold">Timer</span> on timer
                    put 15 * 1000000 on timer

                    split timer into futTimer, currTimer

                    race
                        strterm <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            get candidateName on strterm
                            hput <span style="font-weight: bold">SubmitVote</span> on vch
                            put candidateName on vch
                            get response on vch

                            <span style="font-weight: bold">case</span> response <span style="font-weight: bold">of</span>
                                <span style="font-weight: bold">Left</span>(<span style="font-weight: bold">error</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                                    put <span style="font-weight: bold">error</span> on strterm
                                    resetTimerAndRecurse(<span style="font-weight: bold">Just</span>(voter) | futTimer, currTimer <span style="font-weight: bold">=&gt;</span> vch, strterm)
                                <span style="font-weight: bold">Right</span>(<span style="font-weight: bold">_</span>) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                                    put <span style="font-style: italic">&quot;Your vote has been cast successfully!&quot;</span> on strterm
                                    hput <span style="font-weight: bold">QuitVoting</span> on vch
                                    resetTimerAndRecurse(<span style="font-weight: bold">Nothing</span> | futTimer, currTimer <span style="font-weight: bold">=&gt;</span> vch, strterm)

                        currTimer <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            get () on currTimer
                            close currTimer
                            hput <span style="font-weight: bold">QuitVoting</span> on vch
                            get <span style="font-weight: bold">_</span> on strterm
                            hput <span style="font-weight: bold">StringTerminalPut</span> on strterm
                            put <span style="font-style: italic">&quot;Time Out! please try again!&quot;</span> on strterm
                            votingClient(<span style="font-weight: bold">Nothing</span> | futTimer <span style="font-weight: bold">=&gt;</span> vch, strterm)
    
    proc resetTimerAndRecurse <span style="font-weight: bold">=</span> 
        maybeVoter | futTimer, currTimer <span style="font-weight: bold">=&gt;</span> vch, strterm <span style="font-weight: bold">-&gt;</span>
            plug
                futTimer, currTimer <span style="font-weight: bold">=&gt;</span> nntimer <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    fork nntimer as
                        futntimer <span style="font-weight: bold">-&gt;</span> futntimer |=| futTimer
                        currntimer <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            get <span style="font-weight: bold">_</span> on currTimer
                            close currTimer
                            halt currntimer
                nntimer <span style="font-weight: bold">=&gt;</span> ntimer <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    split nntimer into t0, t1
                    close t1
                    t0 |=| ntimer
                votingClient(maybeVoter | ntimer <span style="font-weight: bold">=&gt;</span> vch, strterm )
<span style="font-weight: bold">where</span>
    fun showCandidateRes <span style="font-weight: bold">::</span> <span style="font-weight: bold">Candidate</span> <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
        candidate <span style="font-weight: bold">-&gt;</span> append(append(append(<span style="font-weight: bold">CName</span>(candidate), <span style="font-style: italic">&quot;: &quot;</span>), showInt(<span style="font-weight: bold">VoteCount</span>(candidate))), <span style="font-style: italic">&quot;</span><span style="font-weight: bold; font-style: italic">\n</span><span style="font-style: italic">&quot;</span>)
    fun showResults <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Candidate</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Char</span>] <span style="font-weight: bold">=</span>
        candidates <span style="font-weight: bold">-&gt;</span> concat(map(candidates, (<span style="font-weight: bold">App</span> <span style="font-weight: bold">:=</span> c <span style="font-weight: bold">-&gt;</span> showCandidateRes(c))))

defn                          
    proc votingServer <span style="font-weight: bold">::</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Voter</span>) | <span style="font-weight: bold">Vote</span> <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">Put</span>(() | <span style="font-weight: bold">Passer</span>( | <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">MemData</span> | ))) <span style="font-weight: bold">=</span> 
        maybeVoter | vch <span style="font-weight: bold">=&gt;</span> passer <span style="font-weight: bold">-&gt;</span>
            hcase vch <span style="font-weight: bold">of</span>
                <span style="font-weight: bold">ValidateVoter</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    get voterName on vch
                    
                    put () on passer
                    hput <span style="font-weight: bold">Passer</span> on passer
                    split passer into mem, negMemAndPasser

                    hput <span style="font-weight: bold">MemGet</span> on mem
                    get memData on mem

                    <span style="font-weight: bold">case</span> findVoter(voterName, <span style="font-weight: bold">Voters</span>(memData)) <span style="font-weight: bold">of</span>
                        <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            put <span style="font-weight: bold">Left</span>(<span style="font-style: italic">&quot;Voter Not registered&quot;</span>) on vch
                            passMemAndRecurse(<span style="font-weight: bold">Nothing</span> | vch <span style="font-weight: bold">=&gt;</span> mem, negMemAndPasser)
                        <span style="font-weight: bold">Just</span>(voter) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            switch
                                <span style="font-weight: bold">IsVoting</span>(voter) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    put <span style="font-weight: bold">Left</span>(<span style="font-style: italic">&quot;Voter is voting in another station&quot;</span>) on vch
                                    passMemAndRecurse(<span style="font-weight: bold">Nothing</span> | vch <span style="font-weight: bold">=&gt;</span> mem, negMemAndPasser)
                                <span style="font-weight: bold">HasVoted</span>(voter) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    put <span style="font-weight: bold">Left</span>(<span style="font-style: italic">&quot;Voter has already voted&quot;</span>) on vch
                                    passMemAndRecurse(<span style="font-weight: bold">Nothing</span> | vch <span style="font-weight: bold">=&gt;</span> mem, negMemAndPasser)
                                <span style="font-weight: bold">True</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    put <span style="font-weight: bold">Right</span>(voter) on vch
                                    hput <span style="font-weight: bold">MemPut</span> on mem
                                    put replaceVoter(voter, toggleIsVoting(voter), memData) on mem
                                    passMemAndRecurse(<span style="font-weight: bold">Just</span>(toggleIsVoting(voter)) | vch <span style="font-weight: bold">=&gt;</span> mem, negMemAndPasser)
                <span style="font-weight: bold">SubmitVote</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    get candidateName on vch
                    <span style="font-weight: bold">case</span> maybeVoter <span style="font-weight: bold">of</span>
                        <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            put <span style="font-weight: bold">Left</span>(<span style="font-style: italic">&quot;Voter not specified&quot;</span>) on vch
                            votingServer(<span style="font-weight: bold">Nothing</span> | vch <span style="font-weight: bold">=&gt;</span> passer)
                        <span style="font-weight: bold">Just</span>(voter) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            put () on passer
                            hput <span style="font-weight: bold">Passer</span> on passer
                            split passer into mem, negMemAndPasser


                            hput <span style="font-weight: bold">MemGet</span> on mem
                            get memData on mem
                            
                            <span style="font-weight: bold">case</span> findCandidate(candidateName, <span style="font-weight: bold">Candidates</span>(memData)) <span style="font-weight: bold">of</span>
                                <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    put <span style="font-weight: bold">Left</span>(<span style="font-style: italic">&quot;Candidate Not Found!&quot;</span>) on vch
                                    passMemAndRecurse(<span style="font-weight: bold">Just</span>(voter) | vch <span style="font-weight: bold">=&gt;</span> mem, negMemAndPasser)
                                <span style="font-weight: bold">Just</span>(candidate) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                    put <span style="font-weight: bold">Right</span>(()) on vch
                                    hput <span style="font-weight: bold">MemPut</span> on mem
                                    put replaceCandidate(candidate, incrementVoteCount(candidate), memData) on mem
                                    hput <span style="font-weight: bold">MemGet</span> on mem
                                    get memData on mem
                                    hput <span style="font-weight: bold">MemPut</span> on mem
                                    put replaceVoter(voter, toggleHasVoted(voter), memData) on mem
                                    passMemAndRecurse(<span style="font-weight: bold">Just</span>(toggleHasVoted(voter)) | vch <span style="font-weight: bold">=&gt;</span> mem, negMemAndPasser)
                <span style="font-weight: bold">GetResults</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                    put () on passer
                    hput <span style="font-weight: bold">Passer</span> on passer
                    split passer into mem, negMemAndPasser

                    hput <span style="font-weight: bold">MemGet</span> on mem
                    get memData on mem

                    put <span style="font-weight: bold">Candidates</span>(memData) on vch
                    passMemAndRecurse(maybeVoter | vch <span style="font-weight: bold">=&gt;</span> mem, negMemAndPasser)

                <span style="font-weight: bold">QuitVoting</span> <span style="font-weight: bold">-&gt;</span>
                    <span style="font-weight: bold">case</span> maybeVoter <span style="font-weight: bold">of</span>
                        <span style="font-weight: bold">Nothing</span> <span style="font-weight: bold">-&gt;</span> votingServer(<span style="font-weight: bold">Nothing</span> | vch <span style="font-weight: bold">=&gt;</span> passer)
                        <span style="font-weight: bold">Just</span>(voter) <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                            put () on passer
                            hput <span style="font-weight: bold">Passer</span> on passer
                            split passer into mem, negMemAndPasser
                            hput <span style="font-weight: bold">MemGet</span> on mem
                            get memData on mem

                            hput <span style="font-weight: bold">MemPut</span> on mem
                            put replaceVoter(voter, toggleIsVoting(voter), memData) on mem
                            passMemAndRecurse(<span style="font-weight: bold">Nothing</span> | vch <span style="font-weight: bold">=&gt;</span> mem, negMemAndPasser)

    proc passMemAndRecurse <span style="font-weight: bold">=</span> 
        maybeVoter | vch <span style="font-weight: bold">=&gt;</span> mem, negMemAndPasser <span style="font-weight: bold">-&gt;</span>
            fork negMemAndPasser as
                negMem <span style="font-weight: bold">-&gt;</span> negMem |=| neg mem
                passer <span style="font-weight: bold">-&gt;</span> votingServer(maybeVoter | vch <span style="font-weight: bold">=&gt;</span> passer)
<span style="font-weight: bold">where</span>
    fun findVoter <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>], [<span style="font-weight: bold">Voter</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Voter</span>) <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">_</span>, <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
        x, v<span style="font-weight: bold">:</span>vs <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> stringEqual(x, <span style="font-weight: bold">Name</span>(v)) <span style="font-weight: bold">then</span> <span style="font-weight: bold">Just</span>(v) <span style="font-weight: bold">else</span> findVoter(x, vs) 

    fun toggleHasVoted <span style="font-weight: bold">::</span> <span style="font-weight: bold">Voter</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Voter</span> <span style="font-weight: bold">=</span>
        voter <span style="font-weight: bold">-&gt;</span> makeVoter(<span style="font-weight: bold">Name</span>(voter), not(<span style="font-weight: bold">HasVoted</span>(voter)), <span style="font-weight: bold">IsVoting</span>(voter))
    fun toggleIsVoting <span style="font-weight: bold">::</span> <span style="font-weight: bold">Voter</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Voter</span> <span style="font-weight: bold">=</span>
        voter <span style="font-weight: bold">-&gt;</span> makeVoter(<span style="font-weight: bold">Name</span>(voter), <span style="font-weight: bold">HasVoted</span>(voter), not(<span style="font-weight: bold">IsVoting</span>(voter)))
    fun removeVoter <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>], [<span style="font-weight: bold">Voter</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Voter</span>] <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">_</span>, <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
        x, v<span style="font-weight: bold">:</span>vs <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> stringEqual(x, <span style="font-weight: bold">Name</span>(v)) <span style="font-weight: bold">then</span> vs <span style="font-weight: bold">else</span> v<span style="font-weight: bold">:</span>removeVoter(x, vs)

    fun replaceVoter <span style="font-weight: bold">::</span> <span style="font-weight: bold">Voter</span>, <span style="font-weight: bold">Voter</span>, <span style="font-weight: bold">MemData</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MemData</span> <span style="font-weight: bold">=</span>
        prevVoter, newVoter, memData <span style="font-weight: bold">-&gt;</span> makeMemData(newVoter<span style="font-weight: bold">:</span>removeVoter(<span style="font-weight: bold">Name</span>(prevVoter), <span style="font-weight: bold">Voters</span>(memData)), <span style="font-weight: bold">Candidates</span>(memData))
    
    fun findCandidate <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>], [<span style="font-weight: bold">Candidate</span>] <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Maybe</span>(<span style="font-weight: bold">Candidate</span>) <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">_</span>, <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Nothing</span>
        x, v<span style="font-weight: bold">:</span>vs <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> stringEqual(x, <span style="font-weight: bold">CName</span>(v)) <span style="font-weight: bold">then</span> <span style="font-weight: bold">Just</span>(v) <span style="font-weight: bold">else</span> findCandidate(x, vs) 
    fun incrementVoteCount <span style="font-weight: bold">::</span> <span style="font-weight: bold">Candidate</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Candidate</span> <span style="font-weight: bold">=</span>
        candidate <span style="font-weight: bold">-&gt;</span> makeCandidate(<span style="font-weight: bold">CName</span>(candidate), <span style="font-weight: bold">VoteCount</span>(candidate) + 1)
        
    fun removeCandidate <span style="font-weight: bold">::</span> [<span style="font-weight: bold">Char</span>], [<span style="font-weight: bold">Candidate</span>] <span style="font-weight: bold">-&gt;</span> [<span style="font-weight: bold">Candidate</span>] <span style="font-weight: bold">=</span>
        <span style="font-weight: bold">_</span>, <span style="font-weight: bold">[]</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">[]</span>
        x, v<span style="font-weight: bold">:</span>vs <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">if</span> stringEqual(x, <span style="font-weight: bold">CName</span>(v)) <span style="font-weight: bold">then</span> vs <span style="font-weight: bold">else</span> v<span style="font-weight: bold">:</span>removeCandidate(x, vs)

    fun replaceCandidate <span style="font-weight: bold">::</span> <span style="font-weight: bold">Candidate</span>, <span style="font-weight: bold">Candidate</span>, <span style="font-weight: bold">MemData</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">MemData</span> <span style="font-weight: bold">=</span>
        prevCandidate, newCandidate, memData <span style="font-weight: bold">-&gt;</span> (<span style="font-weight: bold">Voters</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">Voters</span>(memData), <span style="font-weight: bold">Candidates</span> <span style="font-weight: bold">:=</span> <span style="font-weight: bold">-&gt;</span> newCandidate<span style="font-weight: bold">:</span>removeCandidate(<span style="font-weight: bold">CName</span>(prevCandidate), <span style="font-weight: bold">Candidates</span>(memData)))
 

defn
    proc memAccessRacer <span style="font-weight: bold">::</span> | <span style="font-weight: bold">Put</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | ))), <span style="font-weight: bold">Put</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | ))), <span style="font-weight: bold">Put</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | )))  <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | ) <span style="font-weight: bold">=</span> 
        | ch1, ch2, ch3 <span style="font-weight: bold">=&gt;</span> mem <span style="font-weight: bold">-&gt;</span> race 
            ch1 <span style="font-weight: bold">-&gt;</span> memAccessHelper(| ch1, ch2, ch3 <span style="font-weight: bold">=&gt;</span> mem)
            ch2 <span style="font-weight: bold">-&gt;</span> memAccessHelper(| ch2, ch1, ch3 <span style="font-weight: bold">=&gt;</span> mem)
            ch3 <span style="font-weight: bold">-&gt;</span> memAccessHelper(| ch3, ch1, ch2 <span style="font-weight: bold">=&gt;</span> mem)

    proc memAccessHelper <span style="font-weight: bold">::</span> | <span style="font-weight: bold">Put</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | ))), <span style="font-weight: bold">Put</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | ))), <span style="font-weight: bold">Put</span>( () | <span style="font-weight: bold">Passer</span>(| <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | )))  <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">MemCell</span>(<span style="font-weight: bold">A</span> | ) <span style="font-weight: bold">=</span>
        | winner, loser1, loser2 <span style="font-weight: bold">=&gt;</span> mem <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
            get <span style="font-weight: bold">_</span> on winner
            hcase winner <span style="font-weight: bold">of</span> 
                <span style="font-weight: bold">Passer</span> <span style="font-weight: bold">-&gt;</span> fork winner as 
                    rmem <span style="font-weight: bold">-&gt;</span> mem |=| rmem
                    negMemAndWinner <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                        split negMemAndWinner into negmem, nwinner
                        plug 
                            memAccessRacer( | nloser1, nloser2, nwinner <span style="font-weight: bold">=&gt;</span> nmem )
                            negmem, nmem <span style="font-weight: bold">=&gt;</span> <span style="font-weight: bold">-&gt;</span> negmem |=| neg nmem
                            loser1 <span style="font-weight: bold">=&gt;</span> nloser1 <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                get <span style="font-weight: bold">_</span> on loser1
                                put () on nloser1
                                nloser1 |=| loser1
                            loser2 <span style="font-weight: bold">=&gt;</span> nloser2 <span style="font-weight: bold">-&gt;</span> <span style="font-weight: bold">do</span>
                                get <span style="font-weight: bold">_</span> on loser2
                                put () on nloser2
                                nloser2 |=| loser2
proc run <span style="font-weight: bold">=</span>
    | console, timer1, timer2, timer3 <span style="font-weight: bold">=&gt;</span> strterm1, strterm2, strterm3 <span style="font-weight: bold">-&gt;</span>
        plug
            votingClient(<span style="font-weight: bold">Nothing</span> | timer1 <span style="font-weight: bold">=&gt;</span> vch1, strterm1)
            votingClient(<span style="font-weight: bold">Nothing</span> | timer2 <span style="font-weight: bold">=&gt;</span> vch2, strterm2)
            votingClient(<span style="font-weight: bold">Nothing</span> | timer3 <span style="font-weight: bold">=&gt;</span> vch3, strterm3)

            votingServer(<span style="font-weight: bold">Nothing</span> | vch1 <span style="font-weight: bold">=&gt;</span> ch1)
            votingServer(<span style="font-weight: bold">Nothing</span> | vch2 <span style="font-weight: bold">=&gt;</span> ch2)
            votingServer(<span style="font-weight: bold">Nothing</span> | vch3 <span style="font-weight: bold">=&gt;</span> ch3)

            memAccessRacer(| ch1, ch2, ch3 <span style="font-weight: bold">=&gt;</span> mem)
            memCell(makeMemData(
                [
                    makeVoter(<span style="font-style: italic">&quot;Voter1&quot;</span>, <span style="font-weight: bold">False</span>, <span style="font-weight: bold">False</span>), 
                    makeVoter(<span style="font-style: italic">&quot;Voter2&quot;</span>, <span style="font-weight: bold">False</span>, <span style="font-weight: bold">False</span>), 
                    makeVoter(<span style="font-style: italic">&quot;Voter3&quot;</span>, <span style="font-weight: bold">False</span>, <span style="font-weight: bold">False</span>)
                ], 
                [
                    makeCandidate(<span style="font-style: italic">&quot;Trump&quot;</span>, 0), 
                    makeCandidate(<span style="font-style: italic">&quot;Biden&quot;</span>, 0)
                ]
            ) | mem <span style="font-weight: bold">=&gt;</span> )
</pre></div>

`;

const Page = () => (
  <main>
    <div className="md:px-48 xxl:px-80 my-32">
      <h1>Voting System</h1>
      <div
        className="mt-8 bg-light_gray inline-block p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  </main>
);
export default Page;
