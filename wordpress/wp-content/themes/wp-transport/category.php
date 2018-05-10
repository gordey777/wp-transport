<?php get_header(); ?>
  <?php $curr__ID = get_queried_object()->cat_ID; ?>
  <?php $curr_term = 'category_' . $curr__ID; ?>
  <?php $front__id = (int)(get_option( 'page_on_front' )); ?>




<?php if ( in_category( 9 ) || post_is_in_descendant_category( 9 ) ) :
      $catargs = array(
      'show_option_all'    => '',
      'show_option_none'   => __('No categories'),
      'orderby'            => 'name',
      'order'              => 'ASC',
      'show_last_update'   => 0,
      'style'              => 'list',
      'show_count'         => 0,
      'hide_empty'         => 0,
      'use_desc_for_title' => 1,
      'child_of'           => 9,
      'feed'               => '',
      'feed_type'          => '',
      'feed_image'         => '',
      'exclude'            => '',
      'exclude_tree'       => '',
      'include'            => '',
      'hierarchical'       => true,
      'title_li'           => '',
      'number'             => NULL,
      'echo'               => 1,
      'depth'              => 2,
      'current_category'   => $curr__ID,
      'pad_counts'         => 0,
      'taxonomy'           => 'category',
      'walker'             => 'Walker_Category',
      'hide_title_if_empty' => false,
      'separator'          => '',
    );
?>
<div class="page__content">
    <div class="container">
      <div class="row">
        <div class="sidebar hidden-md-down col-lg-3">
          <div class="vertical-menu">
            <ul>
              <?php wp_list_categories( $catargs ); ?>
            </ul>
          </div>
        </div>
        <div class="col-xs-12 col-lg-9">
          <?php easy_breadcrumbs(); ?>
          <h1 class="page__header"><?php echo get_queried_object()->name; ?></h1>
          <div class="container-inner">
            <div class="wrapper">
              <div class="spec-list">
                <div class="row">
                  <div class="col-12">
                    <div class="wysiwyg">
                      <p></p>
                      <p>Компания АСТ24 предлагает аренду автовышек в Красноярске и Красноярском крае по выгодным ценам: от 1000 руб. в час, доставка за город.
                        <br> Мы владеем собственным парком автоподъемной спецтехники отечественных, японских и корейских брендов (ЗИЛ, HORYONG, Hyundai, ISUZU) с подъемной высотой от 15 до 50 метров. В нашем парке в наличии:</p>
                      <ul>
                        <li>Коленчатые подъемники;</li>
                        <li>Поворотные, а также неповоротные телескопические вышки;</li>
                        <li>Вышки-платформы.</li>
                      </ul>
                      <p>Стоимость услуг автовышки варьируется - от 1000 руб. за час работы, арендный срок – от 2 часов. Наши автовышки способны поднимать вес до 300 кг.</p>
                      <h2>Как заказать услуги автовышки</h2>
                      <p>Для того чтобы заказать услуги автогидроподъемника звоните <strong>8 (391) 272-00-24</strong>. Номер бесплатной горячей линии: <strong>8 (800) 770-00-24</strong>. Доставка за город осуществляется максимально оперативно – в течение часа техника подается на объект.</p>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-15-metrov/" class="spec-list__item-title">Автовышка ISUZU ELF (15 метров)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-15-metrov/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-15-metrov/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/c13/c13362ef26e8a7caf3b2e63910d021af.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 1000 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>2 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>Бесплатно</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>40 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>15 метров</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность люльки:<b>200 кг</b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты :<b>5520*1920*3500 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка ISUZU ELF (15 метров)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-platforma-isuzu-elf-15-metrov/" class="spec-list__item-title">Автовышка платформа ISUZU ELF (15 метров)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-platforma-isuzu-elf-15-metrov/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-platforma-isuzu-elf-15-metrov/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/3ea/3ea0b71308d3dfba66b9a98dcec5d2eb.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 1400 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>2 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>Бесплатно</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>40 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>15 метров</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность люльки:<b>800 кг</b></div>
                        <div class="spec-list__item-content-item">Размер платформы:<b>1.7х2.5 метра</b></div>
                        <div class="spec-list__item-content-item">Габариты :<b>6 230*2 100*3 160 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка платформа ISUZU ELF (15 метров)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-agp-18-gaz-18-metrov/" class="spec-list__item-title">Автовышка АГП-18 ГАЗ (18 метров)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-agp-18-gaz-18-metrov/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-agp-18-gaz-18-metrov/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/d3d/d3d9ec63163e8b0f5925a739a1c62157.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 1500 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>2 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>Бесплатно</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>40 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>18 метров</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность люльки:<b>200 кг</b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты :<b>8 000*2 500*3 900 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка АГП-18 ГАЗ (18 метров)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-21-metra/" class="spec-list__item-title">Автовышка ISUZU Elf (21 метра)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-21-metra/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-21-metra/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/eaa/eaaa1453c2c2b95c1af08ea709974a1a.jpeg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 1800 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>2 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>Бесплатно</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>55 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>21 метра</b></div>
                        <div class="spec-list__item-content-item">Грузоподъёмность люльки:<b>800 кг</b></div>
                        <div class="spec-list__item-content-item">Размер платформы :<b>2х4 метра</b></div>
                        <div class="spec-list__item-content-item">Габариты:<b>7800*2210*3600 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка ISUZU Elf (21 метра)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/agp-22-metra-na-shassi-zil-131-/" class="spec-list__item-title">Автовышка ЗИЛ 131 (22 метра)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/agp-22-metra-na-shassi-zil-131-/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/agp-22-metra-na-shassi-zil-131-/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/966/966d7477cf6bcb24d35cb03128a0c3c5.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 1300 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>2 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>Бесплатано</b></div>
                        <div class="spec-list__item-content-item">Доставка меж город:<b>55 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>22 метра</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность люльки:<b>200 кг</b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты :<b>11840*2500*3570 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка ЗИЛ 131 (22 метра)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-22-metra/" class="spec-list__item-title">Автовышка ISUZU Elf (22 метра)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-22-metra/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-22-metra/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/b8a/b8a62ad0ea27ab0359dee6504d90c5f2.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 1300 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>2 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>Бесплатно</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>55 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>22 метра</b></div>
                        <div class="spec-list__item-content-item">Грузоподъёмность люльки:<b>200 кг</b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты:<b>7800*2210*3600 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка ISUZU Elf (22 метра)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-pms-22-maz-22-metra/" class="spec-list__item-title">Автовышка ПМС-22 МАЗ (22 метра)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-pms-22-maz-22-metra/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-pms-22-maz-22-metra/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/1d7/1d7acfeac6c70f55ea20a6cc555fb3ac.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 1500 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>2 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>Бесплатно</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>55 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>22 метра</b></div>
                        <div class="spec-list__item-content-item">Грузоподъёмность люльки:<b>200 кг</b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты:<b>8 000*2 500*3 900 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка ПМС-22 МАЗ (22 метра)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-28-metrov/" class="spec-list__item-title">Автовышка ISUZU Elf (28 метров)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-28-metrov/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-isuzu-elf-28-metrov/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/97f/97f1559fd5739741e57ee81b6638d8a3.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 1900 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>3 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>Бесплатно</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>60 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>28 метров</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность люльки:<b>200 кг</b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты :<b>6100*2300*3100 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка ISUZU Elf (28 метров)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hyundai-gold-32-metra/" class="spec-list__item-title">Автовышка Hyundai GOLD (32 метра)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hyundai-gold-32-metra/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hyundai-gold-32-metra/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/f21/f213e943390091416e8df2f00c20eb6f.JPG);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 2300 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>4 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>1 час</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>70 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Рабочая высота:<b>32 метра</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность люльки:<b>250 кг</b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты:<b>8345*3740*2285 мм.</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка Hyundai GOLD (32 метра)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hyundai-hd-120-38-metrov/" class="spec-list__item-title">Автовышка Hyundai HD-120 (38 метров)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hyundai-hd-120-38-metrov/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hyundai-hd-120-38-metrov/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/bf7/bf7145bb8c0a72d73519d73ec90f47a9.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 2700 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>8 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>1 час</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>70 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>38 метров</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность люльки:<b>300 кг</b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты:<b>8370*2325*3780 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка Hyundai HD-120 (38 метров)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hansin-hs4070-40-metrov/" class="spec-list__item-title"> Автовышка Hansin HS4070 (40 метров)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hansin-hs4070-40-metrov/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hansin-hs4070-40-metrov/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/a50/a50eb192b7c5a34a57ccc0df92906190.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 2 500 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>8 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>1 час</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>100 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Максимальная рабочая высота:<b>40 метров</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность:<b>300 килограмм </b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты :<b>9 100*2 325*3 780 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order=" Автовышка Hansin HS4070 (40 метров)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hansin-hs4570-45-metrov/" class="spec-list__item-title"> Автовышка Hansin HS4570 (45 метров)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hansin-hs4570-45-metrov/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/avtovyshka-hansin-hs4570-45-metrov/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/420/4205277c7947543b714d2ecdd1d5a0fa.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 3 000 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>8 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>1 час</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>100 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Максимальная рабочая высота:<b>45 метров</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность:<b>400 килограмм </b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты :<b>10 035*2 495*3 100 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order=" Автовышка Hansin HS4570 (45 метров)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/horyong-sky-450/" class="spec-list__item-title"> Автовышка HORYONG SKY 450 (45 метров)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/horyong-sky-450/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/horyong-sky-450/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/9e3/9e33edf90dd0d376d5b39920fef7948f.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 3 000 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>8 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>1 час</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>100 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Максимальная рабочая высота:<b>45 метров</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность:<b>300 килограмм </b></div>
                        <div class="spec-list__item-content-item">Поворот корзины:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты :<b>9680*2495*3890 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order=" Автовышка HORYONG SKY 450 (45 метров)">Оставить заявку</button>
                  </div>
                </div>
                <div class="spec-list__item">
                  <div class="spec-list__item-header">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/horyong-sky-500/" class="spec-list__item-title">Автовышка HORYONG SKY 500 (50 метров)</a>
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/horyong-sky-500/" class="spec-list__item-more">Узнать больше</a>
                  </div>
                  <div class="spec-list__item-body mb-3">
                    <a href="http://xn--24-6kc2ef.xn--p1ai/spetstekhnika/avtovyshki/horyong-sky-500/" class="spec-list__item-preview" style="background-image: url(/upload/iblock/473/4731529b6896ded291ffc84383a85b01.jpg);"></a>
                    <div class="spec-list__item-content">
                      <div class="spec-list__item-content-left">
                        <div class="spec-list__item-content-item">Цена за час:<b>от 3 300 рублей</b></div>
                        <div class="spec-list__item-content-item">Минимальное время заказа:<b>8 часа</b></div>
                        <div class="spec-list__item-content-item">Доставка город:<b>1 час</b></div>
                        <div class="spec-list__item-content-item">Доставка межгород:<b>100 рублей/км</b></div>
                      </div>
                      <div class="spec-list__item-content-right">
                        <div class="spec-list__item-content-item">Высота подъема:<b>50 метров</b></div>
                        <div class="spec-list__item-content-item">Грузоподъемность люльки:<b>300 кг</b></div>
                        <div class="spec-list__item-content-item">Радиус поворота:<b>360°</b></div>
                        <div class="spec-list__item-content-item">Габариты :<b>12860*2945*3880 мм</b></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка HORYONG SKY 500 (50 метров)">Оставить заявку</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php else :?>

  <div class="page__content">
    <div class="container">
          <?php easy_breadcrumbs(); ?>
      <h1 class="page__header"><?php echo $cat_title; ?></h1>
      <div class="container-inner">
        <div class="wrapper">
          <div class="spec-categories">
            <div class="row">
              <?php
              $teh_cats = get_categories( array(
                'child_of' => $curr__ID,
                'parent' => $curr__ID,
                'hide_empty' => 0
              ) );
              if( $teh_cats ){
                foreach( $teh_cats as $cat ){
                  $teh_catID = $cat->cat_ID;
                  $cutTerm = 'category_'.$teh_catID;
                  //var_dump($cut_term);
                  $cut_thumb = get_field('cat_img', $cutTerm);

                  if($cut_thumb){
                    $thumb_url = $cut_thumb['sizes']['medium'];
                  } else {
                    $thumb_url = get_template_directory_uri() . '/img/noimage.jpg';
                  } ?>
                  <div class='looper col-sm-6 col-md-4 col-lg-3'>
                    <a href="<?php echo get_category_link( $teh_catID ); ?>" title="<?php echo $cat->name; ?>" class="spec-categories__item">
                      <div class="spec-categories__item-cover" style="background-image: url(<?php echo $thumb_url; ?>)" ></div>
                      <div class="spec-categories__item-footer"><?php echo $cat->name . $cut_term; ?></div>
                    </a>
                  </div><!-- /looper -->

                <?php }
              } else if (have_posts()) {
                while (have_posts()) : the_post(); ?>
                <div id="post-<?php the_ID(); ?>" <?php post_class('looper col-sm-6 col-md-4 col-lg-3'); ?>>

                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="spec-categories__item">
                  <div class="spec-categories__item-cover"
                    <?php if ( has_post_thumbnail()) { ?>
                      style="background-image: url(<?php echo the_post_thumbnail_url('medium'); ?>)"
                    <?php } else { ?>
                      style="background-image: url(<?php echo catchFirstImage(); ?>)"
                    <?php } ?>></div>
                  <div class="spec-categories__item-footer"><?php the_title(); ?></div>
                </a>
                </div><!-- /looper -->
              <?php endwhile;
            } ?>
              <div class="clearfix"></div>
              <?php get_template_part('pagination'); ?>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>
<?php get_footer(); ?>
