import Mail from "../lib/Mail";

export default {
  key: "RegistationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Pedro<pedro@gmail.com>",
      to: `${user.name}<${user.email}>`,
      subject: "Cadastro de Usuario",
      html: `Ola, ${user.name}, seja bem vindo ao sistemas de fila!`,
    });
  },
};
