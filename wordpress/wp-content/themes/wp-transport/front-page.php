<?php /* Template Name: Home Page */ get_header(); ?>

<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div class="container">
    <br>
    <h1 class="page__header text-center"><?php the_title(); ?></h1><?php edit_post_link(); ?>
  </div>
  <div class="container z-1">

    <div class="spec-categories">
      <div class="row">
        <?php
        $teh_cats = get_categories( array(
          'child_of' => 9,
          'parent' => 9,
          'hide_empty' => 0
        ) );
        if( $teh_cats ){
          foreach( $teh_cats as $cat ){
          $curr__ID = $cat->cat_ID;
          $curr_term = 'category_' . $curr__ID;
          $curr__type = get_field('cat_type', $curr_term);


          if(get_field('cat_img', $curr_term)){
            $thumb_url = get_field('cat_img', $curr_term)['sizes']['medium'];
          } else {
            $thumb_url = get_template_directory_uri() . '/img/noimage.jpg';
          }

          $teh_catID = $cat->term_id; ?>
          <div class='looper col-sm-6 col-md-4 col-lg-2'>

            <a href="<?php echo get_category_link( $teh_catID ); ?>" title="<?php echo $cat->name; ?>" class="spec-categories__item">
              <div class="spec-categories__item-cover" style="background-image: url(<?php echo $thumb_url; ?>)" ></div>
              <div class="spec-categories__item-footer"><?php echo $cat->name; ?></div>
            </a>
          </div><!-- /looper -->

          <?php }
        } ?>

      </div>
    </div>

    <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <?php the_content(); ?>
      <?php if( have_rows('questions') ): ?>
        <h2><?php the_field('question_title'); ?></h2>
        <div class="faq">
          <?php while ( have_rows('questions') ) : the_row(); ?>
            <div class="faq-item">
              <div class="faq-item-questions">
                <span class="faq-item-questions-link"><?php the_sub_field('question'); ?></span>
              </div>
              <div class="faq-item-answer">
                <p><?php the_sub_field('answer'); ?></p>
              </div>
            </div>
          <?php endwhile; ?>
        </div>
      <?php endif; ?>


      <?php if( have_rows('advantages') ): ?>
        <h2><?php the_field('advantage_title'); ?></h2>
        <p><?php the_field('advantage_before'); ?></p>
        <div class="utp">
          <?php while ( have_rows('advantages') ) : the_row(); ?>
            <?php $image = get_sub_field('icon'); ?>
            <div class="utp-block">
              <div class="utp-img">
                <?php if ( !empty($image)) {  ?>
                  <img src="<?php echo $image['url']; ?>">
                <?php } ?>
              </div>
              <div class="utp-text">
                <p><?php the_sub_field('desc'); ?></p>
              </div>
            </div>
          <?php  endwhile; ?>
        </div>
        <p><?php the_field('advantages_after'); ?></p>
        <br>
      <?php endif; ?>
    </div>
  </div>


  <?php $objargs = array(
    'numberposts' => 4,
    'category'    => 18,
    'orderby'     => 'date',
    'order'       => 'DESC',
    'post_type'   => 'post',
  );

  $objposts = get_posts( $objargs );
  if($objposts) : ?>
    <?php $k = 0; ?>
    <div class="belt-objects">
      <div class="belt-objects-container">
        <div class="container">
          <div class="belt-object__title"><?php echo get_cat_name(18); ?></div>
            <?php foreach( $objposts as $post):
              setup_postdata($post); ?>
              <?php if($k == 0) :?>
                <div class="row align-items-center">
                  <div  id="post-<?php the_ID(); ?>" <?php post_class('col-lg-6'); ?>>
                    <a href="<?php the_permalink(); ?>" class="object belt-objects__first">
                      <div class="object__body">
                        <div class="object__preview" <?php if ( has_post_thumbnail()) { ?>
                                                        style="background-image: url(<?php echo the_post_thumbnail_url('medium'); ?>)"
                                                      <?php } else { ?>
                                                        style="background-image: url(<?php echo catchFirstImage(); ?>)"
                                                      <?php } ?>>
                          <div class="object__title"><?php the_title(); ?></div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-lg-6">
                    <div class="belt-objects__title"><?php echo category_description(18); ?></div>
                  </div>
                </div>
                <div class="row">
              <?php else: ?>
                <div  id="post-<?php the_ID(); ?>" <?php post_class('col-sm-6 col-lg-3'); ?>>
                  <a href="<?php the_permalink(); ?>" class="object">
                    <div class="object__body">
                      <div class="object__preview" <?php if ( has_post_thumbnail()) { ?>
                                                      style="background-image: url(<?php echo the_post_thumbnail_url('thumbnail'); ?>)"
                                                    <?php } else { ?>
                                                      style="background-image: url(<?php echo catchFirstImage(); ?>)"
                                                    <?php } ?>>
                        <div class="object__title"><?php the_title(); ?></div>
                      </div>
                    </div>
                  </a>
                </div>
              <?php endif; ?>
              <?php $k++; ?>
            <?php endforeach; ?>
            <?php wp_reset_postdata(); ?>
            <div class="col-sm-6 col-lg-3">
              <div class="object all-objects">
                <a href="<?php echo get_category_link(18); ?>" class="btn btn-secondary btn-lg">Все объекты</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>


  <?php if( have_rows('thanks', 258) ): ?>
    <div class="belt-messages">
      <div class="belt-messages-container">
        <div class="container">
          <div class="belt-messages__title"><?php echo get_the_title(258); ?></div>
          <div class="swiper-container">
            <div class="swiper-wrapper" id="lg-homepage-messages">
              <?php while ( have_rows('thanks', 258) ) : the_row(); ?>
                <?php $img = get_sub_field('thanks_img'); ?>
                <?php $cont = get_sub_field('thanks_content'); ?>
                <div class="swiper-slide">
                  <div class="d-flex align-items-center">
                    <div class="col-xl-8">
                      <div class="belt-messages__text"><?php echo custom_field_excerpt(15, $cont); ?>
                        <div class="belt-message__author">
                          <b><?php the_sub_field('title'); ?></b>
                        </div>
                      </div>
                    </div>

                    <a href="<?php echo $img['url']; ?>" class="col-xl-4 message">
                      <img src="<?php echo $img['sizes']['small']; ?>" alt="<?php the_sub_field('title'); ?>">
                    </a>
                  </div>
                </div>
              <?php endwhile; ?>
            </div>
            <div class="d-inline-block">
              <div class="messages__controls mt-4">
                <div class="messages__control messages__control--prev mr-3"></div>
                <div class="messages__count">
                  <span class="messages__count-current">1</span> / <span class="messages__count-total"></span>
                </div>
                <div class="messages__control messages__control--next ml-3"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>

  <?php if( have_rows('partners', 47) ): ?>
    <div class="slider-partners">
      <div class="container">
        <div class="slider-partners__title"><?php echo get_the_title(47); ?></div>
        <div class="slider-partners__inner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <?php while ( have_rows('partners', 47) ) : the_row(); ?>
                <?php $img = get_sub_field('logo'); ?>

                <div class="swiper-slide">
                  <img src="<?php echo $img['sizes']['medium']; ?>" alt="<?php the_sub_field('title'); ?>">
                </div>

              <?php endwhile; ?>
            </div>
          </div>
          <div class="slider-partners__control-prev"></div>
          <div class="slider-partners__control-next"></div>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <br>
  <br>

<?php endwhile; endif; ?>


<?php get_footer(); ?>
