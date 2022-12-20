import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Script src="script.js" />
      <Head>
        <title>Тест</title>
      </Head>
      <main>
        <div className="test-section">
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №1
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer1" id="a" className ="test-answer"></input>
                          <label for="a" id="a_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer1" id="b" className ="test-answer"></input>
                          <label for="b" id="b_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer1" id="c" className ="test-answer"></input>
                          <label for="c" id="c_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №2
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer2" id="d" className="test-answer"></input>
                          <label for="d" id="d_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer2" id="e" className="test-answer"></input>
                          <label for="e" id="e_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer2" id="f" className="test-answer"></input>
                          <label for="f" id="f_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №3
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer3" id="ab" className ="test-answer"></input>
                          <label for="ab" id="ab_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer3" id="ac" className ="test-answer"></input>
                          <label for="ac" id="ac_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer3" id="af" className ="test-answer"></input>
                          <label for="af" id="af_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №4
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer4" id="g" className ="test-answer"></input>
                          <label for="g" id="g_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer4" id="h" className ="test-answer"></input>
                          <label for="h" id="h_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer4" id="i" className ="test-answer"></input>
                          <label for="i" id="i_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №5
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer5" id="j" className="test-answer"></input>
                          <label for="j" id="j_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer5" id="k" className="test-answer"></input>
                          <label for="k" id="k_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer5" id="l" className="test-answer"></input>
                          <label for="l" id="l_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №6
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="m" className="test-answer"></input>
                          <label for="m" id="m_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="n" className="test-answer"></input>
                          <label for="n" id="n_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="o" className="test-answer"></input>
                          <label for="o" id="o_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №7
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="m" className ="test-answer"></input>
                          <label for="m" id="m_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="n" className ="test-answer"></input>
                          <label for="n" id="n_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="o" className="test-answer"></input>
                          <label for="o" id="o_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №8
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="m" className="test-answer"></input>
                          <label for="m" id="m_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="n" className="test-answer"></input>
                          <label for="n" id="n_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="o" className="test-answer"></input>
                          <label for="o" id="o_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №9
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="m" className ="test-answer"></input>
                          <label for="m" id="m_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="n" className ="test-answer"></input>
                          <label for="n" id="n_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="o" className ="test-answer"></input>
                          <label for="o" id="o_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №10
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="m" className ="test-answer"></input>
                          <label for="m" id="m_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="n" className ="test-answer"></input>
                          <label for="n" id="n_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="o" className ="test-answer"></input>
                          <label for="o" id="o_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №11
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="m" className ="test-answer"></input>
                          <label for="m" id="m_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="n" className ="test-answer"></input>
                          <label for="n" id="n_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="o" className ="test-answer"></input>
                          <label for="o" id="o_text">Ответ №3</label>
                      </li>
                  </ul>
              </div>
              <div className="test-question">
                  <h2 className="test-title">
                      Вопрос №12
                  </h2>
                  <ul>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="m" className ="test-answer"></input>
                          <label for="m" id="m_text">Ответ №1</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="n" className ="test-answer"></input>
                          <label for="n" id="n_text">Ответ №2</label>
                      </li>
                      <li className="test-answer">
                          <input type="radio" name="answer6" id="o" className ="test-answer"></input>
                          <label for="o" id="o_text">Ответ №3</label>
                      </li>
                  </ul>

              </div>
              <a href="/result" className="test-submit" type="submit" onClick={() =>mix()}>Проверить</a>

              <section id="info">
              Переключение
              <p id="demo"></p>
              Копирование+вставка:
              <p id="cop">0</p>
              <strong><p id="past">0</p></strong>

              Разрешение:
              <p id="screen"></p>
              Нынешнее положение:
              <p id="nowsize_vnesh"></p>
              Координаты мыши:
              <p></p>
              <input type="text" id="X"></input>
              <p></p>
              <input type="text" id="Y"></input>
              <div className="timerDisplay">
                  00:00:00
               </div>
              </section>
              </div>
      </main>
    </>
  )
}
