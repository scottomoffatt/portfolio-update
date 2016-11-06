<?php
  require_once drupal_get_path('module', 'contact') .'/contact.pages.inc';
  
  //no need to maintain two version of node.tpl.php
  include "node.tpl.php"; 

function local_contact_page(){
    $form = contact_mail_page();
    // override default values here if you want 
    // next one will select a different category
    //$form['cid']['#default_value'] = 0;
    return($form);
}

function local_contact_page_submit($form_id, $form_values){
    return(contact_mail_page_submit($form_id, $form_values));
}

function local_contact_page_validate($form, $form_state){
    return(contact_mail_page_validate($form, $form_state));
}

print drupal_get_form('local_contact_page');    
?>