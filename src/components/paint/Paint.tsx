import "./Paint.css";
import blockPaintImg from "../../assets/block_paint_img.png"

function Paint() {

  return (
    <section id="painSection" className="paint-section about-text left-container" > 
      <h5 data-aos="zoom-out">I Paint, Therefore I Am</h5>
      <h3 data-aos="zoom-out">我畫故我在</h3>

      <img  src={blockPaintImg} alt="alt-block_paint_img.png" />

      <div className="dual-paragraphs">
          <div className="left parallax-scroll">
              <p data-aos="zoom-out" > 不喜繁文縟節, </p>
              <p data-aos="zoom-out" > 不愛引經據點, </p>
              <p data-aos="zoom-out" > 不擅長篇大論, </p>
              <p data-aos="zoom-out" > 謹以真樸拙本性剖析分享創作理念, </p>
              <p data-aos="zoom-out" > 自覺體悟生命如常流動,
              </p>
              <p data-aos="zoom-out" > 遇見陽光, 空氣, 水, 畫作開始生養氣息, </p>
              <p data-aos="zoom-out" > 懷中華根源文化底蘊, </p>
              <p data-aos="zoom-out" > 在虛實相生, 立體想像空間遊走, </p>
              <p data-aos="zoom-out" > 時而戲劇張力緊弛, </p>
              <p data-aos="zoom-out" > 時而韻律節奏音揚, </p>
              <p data-aos="zoom-out" > 純化詩情為畫意, </p>
              <p data-aos="zoom-out" > 一切運行, </p>
              <p data-aos="zoom-out" > 不只為成就一幅幅會呼吸的有機畫作, </p>
              <p data-aos="zoom-out" > 更為打開 一扇心靈之窗。 </p>
              <p data-aos="zoom-out" > 點墨無形, 空刀留影, </p>
              <p data-aos="zoom-out" > 我畫故我在 </p>

          </div>
          <div className="right parallax-scroll">
              <p data-aos="zoom-out" > Don’t like over-elaborate formalities,</p>
              <p data-aos="zoom-out" > Don’t enjoy citing classic works,</p>
              <p data-aos="zoom-out" > Not good at giving long-winded statement,</p>
              <p data-aos="zoom-out" > I only use ingenuity, simplicity, modesty, and intuition to share and examine my notion of creativity,</p>
              <p data-aos="zoom-out" > Through self-awareness, I realize that life goes on,</p>
              <p data-aos="zoom-out" > Through sunlight, air and water, my paintings begin to breathe,</p>
              <p data-aos="zoom-out" > With deep Chinese cultural influences,</p>
              <p data-aos="zoom-out" > I wonder through the imaginary, three-dimensional space constructed by virtual and real images,</p>
              <p data-aos="zoom-out" > Or with calming rhythms at another,</p>
              <p data-aos="zoom-out" > I turn poetry into paintings,</p>
              <p data-aos="zoom-out" > Everything I paint,</p>
              <p data-aos="zoom-out" > Has not only become living artworks that breathe,</p>
              <p data-aos="zoom-out" > But also a window to the soul,</p>
              <p data-aos="zoom-out" > Like shadows casted by wielding a sword,</p>
              <p data-aos="zoom-out" > Intangibles are there to paint,</p>
              <p data-aos="zoom-out" > I Paint, Therefore I Am.</p>
          </div>
      </div>

      <button className="btn">Works</button>
      
    </section>

  )
}

export default Paint
