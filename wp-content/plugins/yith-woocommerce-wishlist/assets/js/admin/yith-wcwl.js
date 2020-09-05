jQuery(document).ready(function(s){s.fn.dependency=function(t,e,n,i){var o=s(this);o.on("change",function(){var c=e(o);s.each(t,function(t,e){var n=s(e);if(n.length){var i=n.closest("tr");i.length&&(c?i.removeClass("yith-disabled"):i.addClass("yith-disabled"))}}),void 0!==n&&n(o,i)}).change()};function n(e,t){var c=this;c.settings={},c.modal=null,c._init=function(){c.settings=s.extend({template:e.data("template"),template_data:{},container:".yith-wcwl-wizard-modal",events:{}},t),"function"==typeof c.settings.events.init&&c.settings.events.init(e,t),c._initOpener()},c._initOpener=function(){e.on("click",function(t){var e=s(this),n=c.settings.template_data;t.preventDefault(),"function"==typeof n&&(n=n(e)),e.WCBackboneModal({template:c.settings.template,variable:n});var i=s(c.settings.container);c._initEditor(i),c._initEnhancedSelect(i),c._initTabs(i),c._initSteps(i),c._initOptions(i,n),c._initEvents(i,c.settings.events)})},c._initEditor=function(t){t.find(".with-editor").each(function(){var n=s(this),t=n.attr("id");tinymce.get(t)&&(restoreTextMode=tinymce.get(t).isHidden(),wp.editor.remove(t)),wp.editor.initialize(t,{tinymce:{wpautop:!0,init_instance_callback:function(e){e.on("Change",function(t){n.val(e.getContent()).change()})}},quicktags:!0,mediaButtons:!0})})},c._initEnhancedSelect=function(t){s(document.body).trigger("wc-enhanced-select-init")},c._initTabs=function(t){t.find(".tabs").on("click","a",function(t){var e=s(this),n=e.closest("ul"),i=n.find("a"),c=n.parent().find(".tab"),o=e.data("target"),_=s(o),a=!1;t.preventDefault(),e.hasClass("active")||(a=!0),i.attr("aria-selected","false").removeClass("active"),e.attr("aria-selected","true").addClass("active"),c.attr("aria-expanded","false").removeClass("active").hide(),_.attr("aria-expanded","true").addClass("active").show(),a&&e.trigger("tabChange")})},c._initOptions=function(i,t){s.each(t,function(t,e){var n=i.find('[name="'+t+'"]');n.length&&e!==n.val()&&(n.is("select")&&!n.find('option[value="'+e+'"]').length?n.append('<option value="'+e+'" selected="selected">'+e+" </option>"):n.val(e))})},c._initSteps=function(i){i.find(".step").hide().first().show(),i.find(".continue-button").on("click",function(t){var e=s(this).closest(".step"),n=e.next(".step");t.preventDefault(),n.length&&c._changeStep(i,e,n)}),i.find(".back-button").on("click",function(t){var e=s(this).closest(".step"),n=e.prev(".step");t.preventDefault(),n.length&&c._changeStep(i,e,n)})},c._initEvents=function(n,t){"function"==typeof c.settings.events.open&&c.settings.events.open(e,n),s.each(t,function(t,e){"init"!==t&&"open"!==t&&("tabChange"===t?n.find(".tabs"):"stepChange"===t?n.find(".step"):n.find(":input")).on(t,function(t){return e(s(this),n,t)})})},c._changeStep=function(o,_,a){_.animate({opacity:0},{duration:200,complete:function(){var t=o.find("article"),e=t.outerWidth(),n=t.outerHeight();t.outerWidth("auto"),t.outerHeight("auto"),_.hide(),a.show();var i=a.outerWidth(),c=a.outerHeight();a.hide(),_.css("opacity",1),t.outerWidth(e),t.outerHeight(n),t.animate({width:i,height:c},{duration:200,complete:function(){a.fadeIn(200)}})}}),a.trigger("stepChange")},c._init()}function i(t,e,n){var i=e.find(".email-preview"),c=e.find("#template").val();o&&o.abort(),o=s.ajax({url:ajaxurl+"?action=preview_promotion_email",data:e.find("form").serialize(),method:"POST",beforeSend:function(){i.block({message:null,overlayCSS:{background:"transparent",opacity:.6}})},complete:function(){i.unblock()},success:function(t){i.removeClass("html plain").addClass(c).html(t)}})}function t(){return{template:"yith-wcwl-promotion-wizard",template_data:function(t){var e;return e=t.hasClass("restore-draft")?t.data("draft"):s.extend(e,{product_id:t.data("product_id"),user_id:t.data("user_id")})},events:{change:i,open:function(t,e,n){e.find("#content_html-tmce").click(),i(0,e)},tabChange:function(t,e,n){e.find("#template").val(t.find(".active").data("template")),i(0,e)},stepChange:function(t,e,n){var i=t.find(".receivers-count"),c=t.find(".show-on-long-queue"),o=c.data("threshold");i.length&&s.ajax({url:ajaxurl+"?action=calculate_promotion_email_receivers",data:e.find("form").serialize(),method:"post",beforeSend:function(){i.css("opacity",.3),c.length&&c.hide()},complete:function(){i.css("opacity",1)},success:function(t){void 0!==t.label&&(i.html(t.label),c.length&&void 0!==t.count&&t.count>o&&c.show())}})}}}}var o=null;s.fn.wizard=function(t){var e=s(this);new n(e,t)},s(".create-promotion").wizard(t()),s(".restore-draft").wizard(t());function e(t){return t.is('input[type="radio"]')||(t=t.find('input[type="radio"]:checked')),"no"===t.val()}function c(t){return t.is(":checked")}var _=s("#yith_wcwl_disable_wishlist_for_unauthenticated_users"),a=s("#yith_wcwl_multi_wishlist_enable"),l=s("#yith_wcwl_enable_multi_wishlist_for_unauthenticated_users"),r=s("#yith_wcwl_modal_enable"),u=s("#yith_wcwl_loop_position"),d=s(".icon-select"),h=s('[name="yith_wcwl_add_to_cart_style"]'),w=s("#yith_wcwl_add_to_cart_icon"),m=s('[name="yith_wcwl_ask_an_estimate_style"]'),f=s("#yith_wcwl_ask_an_estimate_icon"),y=s("#yith_wcwl_enable_share"),p=s("#yith_wcwl_share_fb"),g=s("#yith_wcwl_fb_button_icon"),v=s("#yith_wcwl_share_twitter"),b=s("#yith_wcwl_tw_button_icon"),k=s("#yith_wcwl_share_pinterest"),x=s("#yith_wcwl_pr_button_icon"),C=s("#yith_wcwl_share_email"),S=s("#yith_wcwl_em_button_icon"),z=s("#yith_wcwl_share_whatsapp"),j=s("#yith_wcwl_wa_button_icon"),E=s("#yith_wcwl_show_estimate_button"),H=s("#yith_wcwl_show_additional_info_textarea"),O=s("#yith_wcwl_ask_an_estimate_fields"),W=s("#woocommerce_promotion_mail_settings\\[email_type\\]"),D=s("#woocommerce_yith_wcwl_back_in_stock_settings\\[enabled\\]"),T=s("#woocommerce_yith_wcwl_back_in_stock_settings\\[email_type\\]"),q=s("#woocommerce_yith_wcwl_on_sale_item_settings\\[enabled\\]"),B=s("#woocommerce_yith_wcwl_on_sale_item_settings\\[email_type\\]"),M=s('[id^="type_"]');u.add("select#yith_wcwl_button_position").on("change",function(){var t=s(this);"shortcode"===t.val()?t.parent().next().find(".addon").show():t.parent().next().find(".addon").hide()}).change(),M.on("change",function(){var t=s(this),e=t.val(),n=t.closest(".yith-toggle-content-row").next();"radio"===e||"select"===e?n.removeClass("yith-disabled"):n.addClass("yith-disabled")}).change(),h.on("change",function(){w.change()}),m.on("change",function(){f.change()}),d.each(function(){function t(t){return t.id?s('<span><i class="option-icon fa '+t.element.value.toLowerCase()+'" ></i> '+t.text+"</span>"):t.text}s(this).select2({templateResult:t,templateSelection:t})}),_.dependency(["#yith_wcwl_enable_multi_wishlist_for_unauthenticated_users-yes"],function(){return e(_)&&c(a)},function(){l.change()}),a.dependency(["#yith_wcwl_enable_multi_wishlist_for_unauthenticated_users-yes"],function(){return e(_)&&c(a)},function(){l.change()}),l.dependency(["#yith_wcwl_show_login_notice","#yith_wcwl_login_anchor_text"],function(){return c(a)&&e(_)&&e(l)}),r.dependency(["#yith_wcwl_show_exists_in_a_wishlist"],function(){var t="default"!==r.find(":checked").val();return t||s("#yith_wcwl_show_exists_in_a_wishlist").prop("checked",!0),t}),w.dependency(["#yith_wcwl_add_to_cart_custom_icon"],function(){return"custom"===w.val()&&"button_custom"===h.filter(":checked").val()}),f.dependency(["#yith_wcwl_ask_an_estimate_custom_icon"],function(){return"custom"===f.val()&&"button_custom"===m.filter(":checked").val()}),y.dependency(["#yith_wcwl_share_fb"],c,function(){p.change(),g.change(),v.change(),b.change(),k.change(),x.change(),C.change(),S.change(),z.change(),j.change()}),p.dependency(["#yith_wcwl_fb_button_icon","#yith_wcwl_color_fb_button_background"],function(){return c(p)&&c(y)},function(){g.change()}),g.dependency(["#yith_wcwl_fb_button_custom_icon"],function(){return c(p)&&c(y)&&"custom"===g.val()}),v.dependency(["#yith_wcwl_tw_button_icon","#yith_wcwl_color_tw_button_background"],function(){return c(v)&&c(y)},function(){b.change()}),b.dependency(["#yith_wcwl_tw_button_custom_icon"],function(){return c(v)&&c(y)&&"custom"===b.val()}),k.dependency(["#yith_wcwl_socials_image_url","#yith_wcwl_pr_button_icon","#yith_wcwl_color_pr_button_background"],function(){return c(k)&&c(y)},function(){x.change()}),x.dependency(["#yith_wcwl_pr_button_custom_icon"],function(){return c(k)&&c(y)&&"custom"===x.val()}),C.dependency(["#yith_wcwl_em_button_icon","#yith_wcwl_color_em_button_background"],function(){return c(C)&&c(y)},function(){S.change()}),S.dependency(["#yith_wcwl_em_button_custom_icon"],function(){return c(C)&&c(y)&&"custom"===S.val()}),z.dependency(["#yith_wcwl_wa_button_icon","#yith_wcwl_wa_button_custom_icon","#yith_wcwl_color_wa_button_background"],function(){return c(z)&&c(y)},function(){j.change()}),j.dependency(["#yith_wcwl_wa_button_custom_icon"],function(){return c(z)&&c(y)&&"custom"===j.val()}),v.add(k).dependency(["#yith_wcwl_socials_title","#yith_wcwl_socials_text"],function(){return(c(v)||c(k))&&c(y)}),E.dependency(["#yith_wcwl_show_additional_info_textarea"],c,function(){H.change()}),E.on("change",function(){H.change()}),H.dependency(["#yith_wcwl_additional_info_textarea_label"],function(){return c(E)&&c(H)}),H.on("change",function(){s(this).is(":checked")&&E.is(":checked")?O.removeClass("yith-disabled"):O.addClass("yith-disabled")}),W.dependency(["#woocommerce_promotion_mail_settings\\[content_html\\]"],function(){return"multipart"===W.val()||"html"===W.val()}),W.dependency(["#woocommerce_promotion_mail_settings\\[content_text\\]"],function(){return"multipart"===W.val()||"plain"===W.val()}),D.dependency(["#woocommerce_yith_wcwl_back_in_stock_settings\\[product_exclusions\\]","#woocommerce_yith_wcwl_back_in_stock_settings\\[category_exclusions\\]","#woocommerce_yith_wcwl_back_in_stock_settings\\[email_type\\]","#woocommerce_yith_wcwl_back_in_stock_settings\\[heading\\]","#woocommerce_yith_wcwl_back_in_stock_settings\\[subject\\]","#woocommerce_yith_wcwl_back_in_stock_settings\\[content_html\\]","#woocommerce_yith_wcwl_back_in_stock_settings\\[content_text\\]"],function(){return c(D)},function(){T.change()}),T.dependency(["#woocommerce_yith_wcwl_back_in_stock_settings\\[content_html\\]"],function(){return("multipart"===T.val()||"html"===T.val())&&c(D)}),T.dependency(["#woocommerce_yith_wcwl_back_in_stock_settings\\[content_text\\]"],function(){return("multipart"===T.val()||"plain"===T.val())&&c(D)}),q.dependency(["#woocommerce_yith_wcwl_on_sale_item_settings\\[product_exclusions\\]","#woocommerce_yith_wcwl_on_sale_item_settings\\[category_exclusions\\]","#woocommerce_yith_wcwl_on_sale_item_settings\\[email_type\\]","#woocommerce_yith_wcwl_on_sale_item_settings\\[heading\\]","#woocommerce_yith_wcwl_on_sale_item_settings\\[subject\\]","#woocommerce_yith_wcwl_on_sale_item_settings\\[content_html\\]","#woocommerce_yith_wcwl_on_sale_item_settings\\[content_text\\]"],function(){return c(q)},function(){B.change()}),B.dependency(["#woocommerce_yith_wcwl_on_sale_item_settings\\[content_html\\]"],function(){return("multipart"===B.val()||"html"===B.val())&&c(q)}),B.dependency(["#woocommerce_yith_wcwl_on_sale_item_settings\\[content_text\\]"],function(){return("multipart"===B.val()||"plain"===B.val())&&c(q)}),s(document).on("yith-add-box-button-toggle",function(){var e=s("#new_type"),n=s("#new_options");e.on("change",function(){var t=e.val();"radio"===t||"select"===t?n.closest(".yith-add-box-row").removeClass("yith-disabled"):n.closest(".yith-add-box-row").addClass("yith-disabled")}).change()})});