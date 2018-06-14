<?php
/*
Template Name: Material Page
Template Post Type: post, page
*/
get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <?php
    $category = get_the_category();
    $postcatID =  $category[0]->cat_ID;
    $postID = get_the_ID();
    $postcatParent =  $category[0]->parent;
    ?>

  <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>


    <div class="container">
      <?php easy_breadcrumbs(); ?>
      <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
      <div class="container-inner">
        <div class="wrapper">
          <div class="material-card">
            <div class="material-card__body">
              <div class="material-card__preview" style="background-image: url(<?php if ( has_post_thumbnail()) : the_post_thumbnail_url();  endif; ?>);"></div>
              <div class="material-card__content">
                <?php if( have_rows('material_property') ): ?>
                    <?php while ( have_rows('material_property') ) : the_row(); ?>
                      <div class="material-card__item"><?php the_sub_field('desc'); ?>:<b><?php the_sub_field('price'); ?></b></div>
                    <?php  endwhile; ?>
                <?php endif; ?>
              </div>
            </div>
            <div class="material-card__footer">
              <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Щебень серый(5-20 мм)">Заказать</button>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-8">
              <div class="object-card-top__title">Описание</div>
              <div class="wysiwyg">
                <?php the_content(); ?>
              </div>
            </div>
              <div class="col-xl-4">
                  <div class="list-simple">
                      <div class="list-simple__header"><?php the_field('sale_title'); ?></div>
                      <?php the_field('sale_content'); ?>
                  </div>
              </div>
          </div>
          <a href="<?php echo get_category_link( $postcatID ); ?>" class="btn btn-primary btn-lg mt-5">Вернуться к списку</a>
        </div>
      </div>
    </div>
  </div>

  <?php endwhile; endif; ?>





<?php get_footer(); ?>
