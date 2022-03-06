type CityCodes = 'MOW' | 'HKT' | 'HKG' | 'JNB' | 'PTB' | 'ARH' | 'TRN' | 'KRS' | 'SRT' | 'LOS' | 'EKV' | 'EKT';

export interface Segment {
  id: string;
  // Код города откуда вылет
  origin: CityCodes;
  // Код города куда летим
  destination: CityCodes;
  // Дата и время вылета в unix времени
  dateStart: number;
  // Дата и время прибытия в unix времени
  dateEnd: number;
  // Массив кодов городов с пересадками
  stops: CityCodes[];
  // Длительность полета в миллисекундах
  duration: number;
}
