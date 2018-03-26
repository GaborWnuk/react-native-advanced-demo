//
//  FancyNativeModule.m
//  FancyNativeModule
//
//  Created by Gabor Wnuk on 26/03/2018.
//  Copyright © 2018 Gabor Wnuk. All rights reserved.
//

#import "FancyNativeModule.h"

@interface FancyNativeModule()

@end

@implementation FancyNativeModule

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(addNumbers:(nonnull NSNumber *)first
                  second:(nonnull NSNumber *)second
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    resolve([NSNumber numberWithFloat:([first floatValue] + [second floatValue])]);
}

@end
