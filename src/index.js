import { MessageForm } from "./entities/message-form/model/message-form";
import { Modal } from "./shared/ui/modal/model/modal";

const modal = new Modal(
  "#modal",
  "#open-modal",
  "#close-modal",
  "#modal-content"
);
modal.init();

const secondModal = new Modal(
  "#second-modal",
  "#close-second-modal",
  "#second-modal-content"
);

secondModal.init();

const messageForm = new MessageForm("#message-form", () => secondModal.open());

messageForm.init();
