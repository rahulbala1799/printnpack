import React from 'react';
import Image from 'next/image';
import { cn } from '../../lib/cn';

export default function QuoteProductImage({ src, alt, className, sizes = '160px' }) {
  return (
    <div className={cn('relative aspect-square overflow-hidden bg-stone-100', className)}>
      {src ? (
        <Image
          src={encodeURI(src)}
          alt={alt || ''}
          fill
          unoptimized={src.includes(' ')}
          className="object-cover"
          sizes={sizes}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-stone-300 text-sm font-semibold">
          {(alt || '?').slice(0, 1)}
        </div>
      )}
    </div>
  );
}
