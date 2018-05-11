<?php
/*
Template Name: Service Page
Template Post Type: post, page
*/
get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <?php
    $category = get_the_category();
    $postcatID =  $category[0]->cat_ID;
    $postID = get_the_ID();
    $postcatParent =  $category[0]->parent;


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
      'current_category'   => $postcatID,
      'pad_counts'         => 0,
      'taxonomy'           => 'category',
      'walker'             => 'Walker_Category',
      'hide_title_if_empty' => false,
      'separator'          => '',
    );

    $postargs = array(
      'numberposts' => -1,
      'category'    => $postcatID,
      'orderby'     => 'name',
      'order'       => 'ASC',
      'include'     => array(),
      'exclude'     => array(),
      'meta_key'    => '',
      'meta_value'  =>'',
      'post_type'   => 'post',
      'suppress_filters' => true,
    ); ?>


  <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>
    <div class="container">
      <div class="row">
        <div class="sidebar hidden-md-down col-lg-3">
          <div class="vertical-menu">
            <ul>
              <?php if($postcatParent != 0){
                wp_list_categories( $catargs );
              }else{
                $posts = get_posts( $postargs );


                foreach($posts as $post){
                  setup_postdata($post);
                  if(get_the_ID() == $postID ){
                  $current = 'current';
                  } else {
                    $current = '';
                  } ?>

                  <li class="lvl-1 <?php echo $current; ?>">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                  </li>
                <?php }

                wp_reset_postdata();
              } ?>
            </ul>
          </div>
        </div>
        <div class="col-xs-12 col-lg-9">
          <?php easy_breadcrumbs(); ?>
          <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
          <div class="container-inner">
            <div class="wrapper">
              <div class="news-detail servises-cont">
                <?php if ( has_post_thumbnail()) :?>
                  <?php the_post_thumbnail('medium'); ?>
                <?php endif; ?>
                <?php the_content(); ?>

                <?php $tehargs = array(
                  'numberposts' => -1,
                  'category'    => 9,
                  'orderby'     => 'name',
                  'order'       => 'ASC',
                  'post_type'   => 'post',

                );

                $tehposts = get_posts( $tehargs );
                if($tehposts) : ?>

                  <!-- Ext -->
                  <hr>
                  <h2 style="text-align: center;">Выберите нужную спецтехнику прямо сейчас</h2>
                  <div style="clear:both"></div>
                  <br>
                  <div class="row ext">
                      <?php foreach( $tehposts as $post):
                          setup_postdata($post);

                          $servposts = get_field('servises');
                          foreach ($servposts as $key => $val) {
                            $servposts[$key] = $val->ID;
                          }

                          ?>

                          <?php if( $servposts && in_array($postID, $servposts)): ?>

                            <div class="col-xs-12 col-sm-6 col-md-4 item">
                              <a href="<?php the_permalink(); ?>">
                                <div class="img" title="<?php the_title(); ?>" <?php if ( has_post_thumbnail()) { ?>
                                                                          style="background-image: url(<?php echo the_post_thumbnail_url('medium'); ?>)"
                                                                        <?php } else { ?>
                                                                          style="background-image: url(<?php echo catchFirstImage(); ?>)"
                                                                        <?php } ?>></div>
                                <div class="name"><?php the_title(); ?></div>
                              </a>
                            </div>

                        <?php endif; ?>
                      <?php endforeach; ?>
                      <?php wp_reset_postdata(); ?>
                  </div><!-- /Ext -->
                <?php endif; ?>
              </div>
              <p><a class="btn btn-primary btn-lg mt-5" href="http://xn--24-6kc2ef.xn--p1ai/uslugi/">Возврат к списку</a>
                <button class="btn btn-x mt-5 ml" data-toggle="modal" data-target="#callback">Заказать консультацию</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php endwhile; endif; ?>





<?php get_footer(); ?>
