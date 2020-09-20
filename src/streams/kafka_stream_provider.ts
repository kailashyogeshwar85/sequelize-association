import { Kafka, Producer, Consumer } from "kafkajs";
/**
 * Kafka Stream Provider class
 */
export default class KafkaStreamProvider {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;
  constructor() {
    this.kafka = new Kafka({
      clientId: "my-app",
      brokers: ["kafka1:9092", "kafka2:9092"],
    });
  }

  /**
   * @description connect the producer to kafka brokers
   */
  public async connectProducer() {
    await this.producer.connect();
  }

  /**
   * @description Disconnect the producer from the broker
   */
  public async disconnectProducer() {
    await this.producer.disconnect();
  }

  /**
   * @description send message array to a producer's topic
   * @param topic
   * @param messages
   */
  public async sendMessage(topic: string, messages: { value: string }[]) {
    await this.producer.send({
      topic,
      messages,
    });
  }

  /**
   * @description Connect to consumer via group id
   * @param groupId
   */
  public async connectConsumer(groupId: string) {
    this.consumer = this.kafka.consumer({ groupId });
    await this.consumer.connect();
    this.getMessages((data) => {
      console.log(data);
    });
  }

  /**
   * @description Get messages via callback
   * @param callback
   */
  public async getMessages(callback: Function) {
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        callback({ value: message.value.toString() });
      },
    });
  }

  /**
   * @description Subscribes to the provided topic.
   * @param topic
   * @param fromBeginning
   */
  public async subscribe(topic: string, fromBeginning: boolean = true) {
    await this.consumer.subscribe({ topic, fromBeginning });
  }
}
