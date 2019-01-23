<?php

/**
 * Helper to implementation of hook_views_default_views().
 */
function _story_list_views_default_views() {
  $views = array();

  // Exported view: story_list
  $view = new view;
  $view->name = 'story_list';
  $view->description = 'Show a list with 5 latest stories.';
  $view->tag = '';
  $view->view_php = '';
  $view->base_table = 'node';
  $view->is_cacheable = FALSE;
  $view->api_version = 2;
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */
  $handler = $view->new_display('default', 'Defaults', 'default');
  $handler->override_option('fields', array(
    'nid' => array(
      'label' => 'Nid',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'link_to_node' => 0,
      'exclude' => 1,
      'id' => 'nid',
      'table' => 'node',
      'field' => 'nid',
      'override' => array(
        'button' => 'Override',
      ),
      'relationship' => 'none',
    ),
    'title' => array(
      'label' => '',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 1,
        'path' => 'story-list/[nid]/nojs',
        'link_class' => 'ctools-use-ajax',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'link_to_node' => 0,
      'exclude' => 0,
      'id' => 'title',
      'table' => 'node',
      'field' => 'title',
      'relationship' => 'none',
      'override' => array(
        'button' => 'Override',
      ),
    ),
  ));
  $handler->override_option('sorts', array(
    'created' => array(
      'order' => 'DESC',
      'granularity' => 'second',
      'id' => 'created',
      'table' => 'node',
      'field' => 'created',
      'relationship' => 'none',
    ),
  ));
  $handler->override_option('filters', array(
    'status' => array(
      'operator' => '=',
      'value' => '1',
      'group' => '0',
      'exposed' => FALSE,
      'expose' => array(
        'operator' => FALSE,
        'label' => '',
      ),
      'id' => 'status',
      'table' => 'node',
      'field' => 'status',
      'relationship' => 'none',
    ),
    'type' => array(
      'operator' => 'in',
      'value' => array(
        'story' => 'story',
      ),
      'group' => '0',
      'exposed' => FALSE,
      'expose' => array(
        'operator' => FALSE,
        'label' => '',
      ),
      'id' => 'type',
      'table' => 'node',
      'field' => 'type',
      'relationship' => 'none',
    ),
  ));
  $handler->override_option('access', array(
    'type' => 'none',
  ));
  $handler->override_option('cache', array(
    'type' => 'none',
  ));
  $handler->override_option('style_plugin', 'list');
  $handler = $view->new_display('panel_pane', 'Story list', 'panel_pane_1');
  $handler->override_option('header', '<?php
  ctools_add_js(\'ajax-responder\');
?>');
  $handler->override_option('header_format', '3');
  $handler->override_option('header_empty', 0);
  $handler->override_option('pane_title', 'Story list');
  $handler->override_option('pane_description', '');
  $handler->override_option('pane_category', array(
    'name' => 'View panes',
    'weight' => 0,
  ));
  $handler->override_option('allow', array(
    'use_pager' => FALSE,
    'items_per_page' => FALSE,
    'offset' => FALSE,
    'link_to_view' => FALSE,
    'more_link' => FALSE,
    'path_override' => FALSE,
    'title_override' => FALSE,
    'exposed_form' => FALSE,
    'fields_override' => FALSE,
  ));
  $handler->override_option('argument_input', array());
  $handler->override_option('link_to_view', 0);
  $handler->override_option('inherit_panels_path', 0);
  $handler = $view->new_display('panel_pane', 'Story item', 'panel_pane_2');
  $handler->override_option('fields', array(
    'body' => array(
      'label' => '',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'exclude' => 0,
      'id' => 'body',
      'table' => 'node_revisions',
      'field' => 'body',
      'override' => array(
        'button' => 'Use default',
      ),
      'relationship' => 'none',
    ),
  ));
  $handler->override_option('arguments', array(
    'nid' => array(
      'default_action' => 'ignore',
      'style_plugin' => 'default_summary',
      'style_options' => array(),
      'wildcard' => 'all',
      'wildcard_substitution' => 'All',
      'title' => '',
      'breadcrumb' => '',
      'default_argument_type' => 'fixed',
      'default_argument' => '',
      'validate_type' => 'none',
      'validate_fail' => 'not found',
      'break_phrase' => 0,
      'not' => 0,
      'id' => 'nid',
      'table' => 'node',
      'field' => 'nid',
      'validate_user_argument_type' => 'uid',
      'validate_user_roles' => array(
        '2' => 0,
      ),
      'override' => array(
        'button' => 'Use default',
      ),
      'relationship' => 'none',
      'default_options_div_prefix' => '',
      'default_argument_fixed' => '',
      'default_argument_user' => 0,
      'default_argument_php' => '',
      'validate_argument_node_type' => array(
        'country' => 0,
        'page' => 0,
        'story' => 0,
      ),
      'validate_argument_node_access' => 0,
      'validate_argument_nid_type' => 'nid',
      'validate_argument_vocabulary' => array(),
      'validate_argument_type' => 'tid',
      'validate_argument_transform' => 0,
      'validate_user_restrict_roles' => 0,
      'validate_argument_php' => '',
    ),
  ));
  $handler->override_option('items_per_page', 1);
  $handler->override_option('style_plugin', 'default');
  $handler->override_option('pane_title', 'Story item');
  $handler->override_option('pane_description', '');
  $handler->override_option('pane_category', array(
    'name' => 'View panes',
    'weight' => 0,
  ));
  $handler->override_option('allow', array(
    'use_pager' => FALSE,
    'items_per_page' => FALSE,
    'offset' => FALSE,
    'link_to_view' => FALSE,
    'more_link' => FALSE,
    'path_override' => FALSE,
    'title_override' => FALSE,
    'exposed_form' => FALSE,
    'fields_override' => FALSE,
  ));
  $handler->override_option('argument_input', array(
    'nid' => array(
      'type' => 'panel',
      'context' => 'string.html_safe',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Node: Nid',
    ),
  ));
  $handler->override_option('link_to_view', 0);
  $handler->override_option('inherit_panels_path', 0);

  $views[$view->name] = $view;

  return $views;
}
