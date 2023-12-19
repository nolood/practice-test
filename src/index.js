import { MessageForm } from "./entities/message-form/model/message-form";
import { Modal } from "./shared/ui/modal/model/modal";

const modal = new Modal(
  "#modal",
  "#open-modal",
  "#close-modal",
  "#modal-content"
);
modal.init();

const messageForm = new MessageForm("#message-form");

messageForm.init();
