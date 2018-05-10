<?php get_header(); ?>
  <?php $curr__ID = get_queried_object()->cat_ID; ?>
  <?php $curr_term = 'category_' . $curr__ID; ?>
  <?php $front__id = (int)(get_option( 'page_on_front' )); ?>

<div class="page__content">
    <div class="container">
      <?php easy_breadcrumbs(); ?>

      <h1 class="page__header"><?php echo get_queried_object()->name; ?></h1>
      <div class="container-inner">
        <div class="wrapper">
          <div>
            <?php echo category_description(); ?>
          </div>

          <div class="materials">
            <div class="row">
              <?php if (have_posts()): while (have_posts()) : the_post(); ?>

                <div id="post-<?php the_ID(); ?>" <?php post_class('looper col-lg-6'); ?>>
                  <div class="material">
                    <div class="material__header">
                      <a rel="nofollow" href="<?php the_permalink(); ?>" class="material__title"><?php the_title(); ?></a>
                      <a rel="nofollow" href="<?php the_permalink(); ?>" class="material__more">Узнать больше</a>
                    </div>
                    <div class="material__body">
                      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="material__body-preview" <?php if ( has_post_thumbnail()) { ?>
                                                                                                                          style="background-image: url(<?php echo the_post_thumbnail_url('medium'); ?>)"
                                                                                                                        <?php } else { ?>
                                                                                                                          style="background-image: url(<?php echo catchFirstImage(); ?>)"
                                                                                                                        <?php } ?>></a>
                      <div class="material__body-content">
                        <div class="material__body-row">
                          <?php if( have_rows('material_property') ): ?>
                              <?php while ( have_rows('material_property') ) : the_row(); ?>
                                <div class="material-card__item"><?php the_sub_field('desc'); ?>:<b><?php the_sub_field('price'); ?></b></div>
                              <?php  endwhile; ?>
                          <?php endif; ?>
                        </div>
                      </div>
                    </div>
                    <div class="material__footer">
                      <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="<?php the_title(); ?>">Заказать</button>
                    </div>
                  </div>
                </div><!-- /looper -->
              <?php endwhile; endif; ?>
              <div class="clearfix"></div>
              <?php get_template_part('pagination'); ?>
            </div>
          </div>


          <div>
            <?php the_field('category_content', $curr_term); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php get_footer(); ?>
