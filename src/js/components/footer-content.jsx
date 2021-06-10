import React from "react";

const FoooterContent = () => {
  return (
    <section className="page-footer__content">
      <h2 className="visually-hidden">Информационный блок</h2>
      <div className="page-footer__content-item page-footer__content-item--about-us">
        <h3>О нас</h3>
        <p>
          Магазин гитар, музыкальных инструментов и гитарная мастерская в
          Санкт-Петербурге.
        </p>
        <p>Все инструменты проверены, отстроены и доведены до идеала!</p>
      </div>
      <div className="page-footer__content-item">
        <h3>Каталог</h3>
        <ul>
          <li>
            <a href="#acousticGuitars">Акустические гитары</a>
          </li>
          <li>
            <a href="#classicGuitars">Классические гитары</a>
          </li>
          <li>
            <a href="#electricGuitars">Электрогитары</a>
          </li>
          <li>
            <a href="#bassGuitars">Бас-гитары</a>
          </li>
          <li>
            <a href="#ukulele">Укулеле</a>
          </li>
        </ul>
      </div>
      <div className="page-footer__content-item">
        <h3>Информация</h3>
        <ul>
          <li>
            <a href="#whereCanOneBuy?">Где купить?</a>
          </li>
          <li>
            <a href="#blog">Блог</a>
          </li>
          <li>
            <a href="#questionAnswer">Вопрос - ответ</a>
          </li>
          <li>
            <a href="#purchaseReturns">Возврат</a>
          </li>
          <li>
            <a href="#serviceCenters">Сервис-центры</a>
          </li>
        </ul>
      </div>
      <div className="page-footer__content-item">
        <h3>Контакты</h3>
        <a
          href="https://goo.gl/maps/hgUiqDLWzSV7sLL68"
          target="_blank"
          rel="noreferrer"
        >
          г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.{" "}
        </a>
        <a href="tel:8-812-500-50-50" className="page-footer__tel">
          8-812-500-50-50
        </a>
        <p>
          Режим работы:
          <span className="page-footer__operating-mode">
            с 11:00 до 20:00,{" "}
          </span>
          без выходных.
        </p>
      </div>
    </section>
  );
};

export default FoooterContent;
