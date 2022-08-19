// JSX = JavaScript + XML (HTML)
// Todos os componentes da aplicação react precisam ter extenção jsx
import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar";
import { Post } from "./components/Post"

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
          author="Felipe Eduardo"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati asperiores officia non cupiditate quae labore vel debitis, consectetur magnam fugiat repellat, minus dolor velit porro ducimus culpa, iure sunt rem."
          />
          <Post 
            author="Diego Fernandes"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
