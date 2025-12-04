<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Assurez-vous du bon chemin si vous avez utilisé Composer
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

$_POST = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // debug$_POST);
    // Récupération des champs
    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']);
    $age = htmlspecialchars($_POST['age']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $profession = htmlspecialchars($_POST['profession']);
    $parti = htmlspecialchars($_POST['parti']);
    $region = htmlspecialchars($_POST['region']);
    $ville = htmlspecialchars($_POST['ville']);
    $motivation = nl2br(htmlspecialchars($_POST['motivation']));
    $competences = nl2br(htmlspecialchars($_POST['competences']));
    $experience = nl2br(htmlspecialchars($_POST['experience']));
    $disponibilite = nl2br(htmlspecialchars($_POST['disponibilite']));

    // Charger le template HTML
    $message = file_get_contents('cng_template.html');
    $message = str_replace('{{prenom}}', $prenom, $message);
    $message = str_replace('{{nom}}', $nom, $message);
    $message = str_replace('{{age}}', $age, $message);
    $message = str_replace('{{email}}', $email, $message);
    $message = str_replace('{{telephone}}', $telephone, $message);
    $message = str_replace('{{profession}}', $profession, $message);
    $message = str_replace('{{parti}}', $parti, $message);
    $message = str_replace('{{region}}', $region, $message);
    $message = str_replace('{{ville}}', $ville, $message);
    $message = str_replace('{{motivation}}', $motivation, $message);
    $message = str_replace('{{competences}}', $competences, $message);
    $message = str_replace('{{experience}}', $experience, $message);
    $message = str_replace('{{disponibilite}}', $disponibilite, $message);
    $message = str_replace('{{date}}',  date('d/m/Y H:i'), $message);

    // Initialisation de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuration SMTP
        $mail->isSMTP();
        $mail->Host       = 'mail.glomulser.com'; // ex: smtp.gmail.com
        $mail->SMTPAuth   = true;
        $mail->Username   = 'l.fotso@franchise-it-tech.com';
        $mail->Password   = 'Franchise24@';
        $mail->SMTPSecure = PHPmailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';

        // Destinataires
        $mail->setFrom('l.fotso@franchise-it-tech.com', 'CNG Coalition');
        $mail->addAddress($email, $prenom); // destinataire

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = 'Nouvelle demande de coalition - ' . $prenom . ' ' . $nom;
        $mail->Body    = $message;
        $mail->AltBody = "merci de nous avoir contactés.";
  
        $mail->addEmbeddedImage(__DIR__ . '/logo.png', 'logo');
        if($mail->send()){
            echo 'Message envoyé avec succès !';
        }else{
            echo 'error';
        }
    } catch (Exception $e) {
        echo "Erreur lors de l'envoi : {$mail->ErrorInfo}";
    }
} else {
    echo "Méthode non autorisée.";
}
