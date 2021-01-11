jQuery(document).ready(function () {
  const wsmeNumber = jQuery("#wsme-number").val()
  if (typeof wsmeNumber === "undefined") {
    jQuery("#wsme-cancel-button").addClass("disabled")
  } else {
    jQuery("#wsme-cancel-button").removeClass("disabled")
  }

  function wsmeCancelAll () {
    jQuery("#wsme-number").val("")
  
    jQuery("#wsme-options-form").submit()
  }
  
  jQuery("#wsme-cancel-button").click(function (e) {
    if (typeof wsmeNumber === "undefined") {
      e.preventDefault()
    } else {
      wsmeCancelAll()
    }
  })

  jQuery("#wsme-number").change(function () {
    if (typeof jQuery(this).val() === "undefined") {
      jQuery("#wsme-cancel-button").addClass("disabled")
    } else {
      jQuery("#wsme-cancel-button").removeClass("disabled")
    }
  })
}) 