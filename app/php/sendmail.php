<?php

require_once './Mandrill.php'

try {
	var_dump('HELLO WORLD');
    $mandrill = new Mandrill('yLxCSYWSZH8p8vNT83_i3w');
	var_dump($mandrill);

 //    $template_name = 'havana-opening-shop';
 //    $template_content = array(
 //        array(
 //            'name' => 'example name',
 //            'content' => 'example content'
 //        )
 //    );
 //    $message = array(
 //        'html' => '<p>Example HTML content</p>',
 //        'text' => 'Example text content',
 //        'subject' => 'example subject',
 //        'from_email' => 'nicolas.daniel.29@gmail.com',
 //        'from_name' => 'Nicolas Daniel',
 //        'to' => array(
 //            array(
 //                'email' => 'nicolas.daniel.29@gmail.com',
 //                'name' => 'Nicolas Daniel',
 //                'type' => 'to'
 //            )
 //        ),
 //        'headers' => array('Reply-To' => 'nicolas.daniel.29@gmail.com'),
 //        'important' => false,
 //        'track_opens' => null,
 //        'track_clicks' => null,
 //        'auto_text' => null,
 //        'auto_html' => null,
 //        'inline_css' => null,
 //        'url_strip_qs' => null,
 //        'preserve_recipients' => null,
 //        'view_content_link' => null,
 //        'bcc_address' => 'message.bcc_address@example.com',
 //        'tracking_domain' => null,
 //        'signing_domain' => null,
 //        'return_path_domain' => null,
 //        'merge' => true,
 //        'merge_language' => 'mailchimp',
 //        'global_merge_vars' => array(
 //            array(
 //                'name' => 'merge1',
 //                'content' => 'merge1 content'
 //            )
 //        ),
 //        'merge_vars' => array(
 //            array(
 //                'rcpt' => 'recipient.email@example.com',
 //                'vars' => array(
 //                    array(
 //                        'name' => 'merge2',
 //                        'content' => 'merge2 content'
 //                    )
 //                )
 //            )
 //        ),
 //        'tags' => array('password-resets'),
 //        'subaccount' => 'customer-123',
 //        'google_analytics_domains' => array('example.com'),
 //        'google_analytics_campaign' => 'message.from_email@example.com',
 //        'metadata' => array('website' => 'www.example.com'),
 //    );
 //    $async = false;
 //    $ip_pool = 'Main Pool';
 //    $send_at = 'example send_at';
 //    $result = $mandrill->messages->sendTemplate($template_name, $template_content, $message, $async, $ip_pool, $send_at);
 //    print_r($result);
    /*
    Array
    (
        [0] => Array
            (
                [email] => recipient.email@example.com
                [status] => sent
                [reject_reason] => hard-bounce
                [_id] => abc123abc123abc123abc123abc123
            )
    
    )
    */
} catch(Mandrill_Error $e) {
    // Mandrill errors are thrown as exceptions
    echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
    // A mandrill error occurred: Mandrill_Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    throw $e;
}

?>