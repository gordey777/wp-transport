<?php get_header(); ?>
  <?php $curr__ID = get_queried_object()->cat_ID; ?>
  <?php $curr_term = 'category_' . $curr__ID; ?>
  <?php $front__id = (int)(get_option( 'page_on_front' )); ?>

  <div class="page__content">
    <div class="container">
      <?php easy_breadcrumbs(); ?>
      <h1 class="page__header">Объекты</h1>
      <div class="container-inner">
        <div class="wrapper">
          <div class="objects">
            <?php if (have_posts()): ?>
              <?php $k = 0; ?>
              <?php while (have_posts()) : the_post(); ?>

                <?php if($k == 0) :?>
                  <div id="post-<?php the_ID(); ?>" <?php post_class('looper object object--large'); ?>>
                    <div class="object__body">
                      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="object__preview" <?php if ( has_post_thumbnail()) { ?>
                                                                                                                            style="background-image: url(<?php echo the_post_thumbnail_url(); ?>)"
                                                                                                                          <?php } else { ?>
                                                                                                                            style="background-image: url(<?php echo catchFirstImage(); ?>)"
                                                                                                                          <?php } ?>></a>
                      <div class="object__content">
                        <div class="object__content-text">
                          <div class="object__title">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                          </div>
                          <?php
                          if(get_field('object_desc')){
                            the_field('object_desc');
                          } else{
                            wpeExcerpt('wpeExcerpt20');
                          }
                          ?>
                          </div>
                        <a href="<?php the_permalink(); ?>" class="object__content-footer">Узнать больше</a>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                <?php else: ?>

                  <div id="post-<?php the_ID(); ?>" <?php post_class('looper col-lg-6'); ?>>
                    <div class="object">
                      <div class="object__body">
                        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="object__preview" <?php if ( has_post_thumbnail()) { ?>
                                                                                                                            style="background-image: url(<?php echo the_post_thumbnail_url('medium'); ?>)"
                                                                                                                          <?php } else { ?>
                                                                                                                            style="background-image: url(<?php echo catchFirstImage(); ?>)"
                                                                                                                          <?php } ?>>
                          <div class="object__title"><?php the_title(); ?></div>
                        </a>
                        <div class="object__content">
                          <div class="object__content-text">
                            <?php
                            if(get_field('object_desc')){
                              the_field('object_desc');
                            } else{
                              wpeExcerpt('wpeExcerpt20');
                            }
                            ?>
                          </div>
                          <a href="<?php the_permalink(); ?>" class="object__content-footer">Узнать больше</a>
                        </div>
                      </div>
                    </div>
                  </div>
                <?php endif; ?>
              <?php $k++; ?>
            <?php endwhile; ?>
            </div>
          <?php endif; ?>
          </div>
          <nav class="pagination-container text-center">
            <?php get_template_part('pagination'); ?>
          </nav>
        </div>
      </div>
    </div>
  </div>









<?php get_footer(); ?>
