import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isMongoId } from 'class-validator';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {

    if( !isMongoId( value ) )
      throw new BadRequestException(`${value} is not a valid MongoID`);
      
    
    return value;
  }
}
