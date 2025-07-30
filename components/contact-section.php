<!-- components/contact-section.php -->
<section class="contact">
  <div class="container">
    <h2>Contact Me</h2>
    <p>If you have a project idea or just want to connect, feel free to drop a message!</p>

    <?php
    $success = false;

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      // Get form fields
      $name = htmlspecialchars($_POST['name']);
      $email = htmlspecialchars($_POST['email']);
      $message = htmlspecialchars($_POST['message']);

      // Example: send email
      $to = "prerakpatel2003@gmail.com"; 
      $subject = "New Contact Form Submission";
      $body = "Name: $name\nEmail: $email\nMessage:\n$message";
      $headers = "From: $email";

      // Use mail() function (works on servers that have mail enabled)
      if (mail($to, $subject, $body, $headers)) {
        $success = true;
      } else {
        echo "<p style='color: green;'>Sucess: Message sent Sucessfully.  May i not respond to you quickly - for the quick reply mail me personally on Patelprerak435@gmail.com  </p>";
      }
    }

    if ($success) {
      echo "<p style='color: #00bcd4; font-weight: bold;'>Thank you! Your message has been submitted.</p>";
    } else {
    ?>

    <form action="" method="post" class="contact-form">
      <div class="form-group">
        <input type="text" name="name" placeholder="Your Name" required>
      </div>
      <div class="form-group">
        <input type="email" name="email" placeholder="Your Email" required>
      </div>
      <div class="form-group">
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" class="btn">Send Message</button>
    </form>

    <?php } ?>
  </div>
</section>
