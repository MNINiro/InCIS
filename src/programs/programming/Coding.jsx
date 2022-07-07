import React from 'react'
import './coding.css'
import img from '../../assets/images/coding.png'
import top from '../../assets/images/top_languages.jpg'
import picList from '../../assets/images/Languages_list.png'

function Coding() {
    return (
        <>
            <section class="code">
                <div className="container code__container">
                    <div className="code__heading">
                        <img src={img} alt="" />
                    </div>

                    <div className="code__intro">
                        <h2>What is programming language?</h2>
                        <p>A programming language is a computer language programmers use to develop software programs, scripts, or other sets of instructions for computers to execute.</p>
                        <p>Although many languages share similarities, each has its own syntax. Once a programmer learns the languages rules, syntax, and structure, they write the source code in a text editor or IDE. Then, the programmer often compiles the code into machine language that can be understood by the computer. Scripting languages, which do not require a compiler, use an interpreter to execute the script.</p>
                    </div>

                    <div className="code__type">
                        <h2>Types of programming languages</h2>
                        <p>Each of the different programming languages mentioned in the next section can be broken into one or more of the following types (paradigms) of languages.</p>
                        <ul>
                            <li>High-level (most common) / low-level</li>
                            <li>Declarative / imperative / procedural</li>
                            <li>General-purpose / domain-specific</li>
                            <li>Object-oriented / concurrent</li>
                            <li>Command / Compiled / Script language</li>
                        </ul>
                    </div>

                    <div className="code__list">
                        <h2>List of computer programming languages</h2>
                        <p>As computers have evolved, many different computer programming languages created for various types of development. Although we do have several dozen languages listed on our site, there are hundreds that we don't have listed. To get an idea of the different programming languages, you can visit The Hello World Collection, which gives a demo of how to write "Hello World" in over 591 different programming languages.
                        <p>Today, there are hundreds of different programming languages. Following section displays a list of languages those are use for different purposes. Some of them are taught at InCIS</p>
                        <img src={picList} alt="" />
</p>
                    </div>

                    <div className="code__app">
                        <h2>Application and program development</h2>
                        <p>Application and program development involves programs you work with on a daily basis. For example, the Internet browser you are using to view this web page is considered a program. If you are interested in developing a program, consider the following languages:</p>
                        <ul>
                            <li>C</li>
                            <li>C#</li>
                            <li>C++</li>
                            <li>D</li>
                            <li>Java</li>
                            <li>Swift</li>
                            <li>Tcl</li>
                            <li>Visual Basic</li>
                        </ul>
                    </div>

                    <div className="code__ai">
                        <h2>Artificial intelligence development</h2>
                        <p>Artificial intelligence or related fields involve creating the character interactions in computer games, portions of programs that make decisions, chatbots, and more. If you're interested in developing an AI, consider the following languages:</p>
                        <ul>
                            <li>AIML</li>
                            <li>C</li>
                            <li>C#</li>
                            <li>C++</li>
                            <li>Prolog</li>
                            <li>Python</li>
                        </ul>
                    </div>

                    <div className="code__db">
                        <h2>Database development</h2>
                        <p>Database developers create and maintain databases. If you're interested in creating or maintaining a database, consider any of the following languages:</p>
                        <ul>
                            <li>MySQL</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div className="code__game">
                        <h2>Game development</h2>
                        <p>Game development involves creating computer games or other entertainment software. If you're interested in developing a game, consider the following languages:</p>
                        <ul>
                            <li>C</li>
                            <li>C#</li>
                            <li>C++</li>
                            <li>DarkBasic</li>
                            <li>Java</li>
                        </ul>
                    </div>

                    <div className="code__driver">
                        <h2>Computer drivers or other hardware development</h2>
                        <p>Computer drivers and programming hardware interface support are a necessity for hardware functionality. If you're interested in developing drivers or software interfaces for hardware devices, consider the following languages:</p>
                        <ul>
                            <li>Assembly</li>
                            <li>C</li>
                        </ul>
                    </div>
                    
                    <div className="code__web">
                        <h2>Internet and web page development</h2>
                        <p>Internet and web page development are the essence of the Internet. Without developers, the Internet would not exist. If you're interested in creating web pages, Internet applications, or other Internet-related tasks, consider the following languages:</p>
                        <ul>
                            <li>HDML</li>
                            <li>HTML</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Perl</li>
                            <li>PHP</li>
                            <li>Python</li>
                            <li>XML</li>
                        </ul>
                    </div>
                    
                    <div className="code__script">
                        <h2>Script development</h2>
                        <p>Although it is not likely to become a career, knowing how to create and develop scripts can increase productivity for you or your company, saving you countless hours. If you're interested in developing scripts, consider the following languages:</p>
                        <ul>
                            <li>AutoHotkey</li>
                            <li>awk</li>
                            <li>bash</li>
                            <li>Perl</li>
                            <li>Python</li>
                            <li>Tcl</li>
                        </ul>
                    </div>

                    <div className="code__img">
                        <h2>top 10 programming languages</h2>
                        <p>In the chart, you can see the top 10 languages are: JavaScript, Java, Python, PHP, C++, C#, TypeScript, Shell, C, and Ruby. The complete overview of growing languages list is on the GitHub Octoverse page.</p>
                        <img src={top} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Coding